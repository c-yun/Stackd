import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Home from "./Home"; 
import School from "./School"
import Trending from "./Trending"
import Login from './Login';
import UserProfile from './UserProfile';
import {BrowserRouter, Route, Link} from "react-router-dom"
import axios from 'axios';
import {schools} from './data/schools';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: null,
      errorMessage: '',
      lockedResult: '',
      bootcamp: {schools}
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.checkForLocalToken = this.checkForLocalToken.bind(this)
    this.logout = this.logout.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  checkForLocalToken() {
    // Look in localStorage for the token
    let token = localStorage.getItem('mernToken')
    if (!token || token === 'undefined') {
      // There is no token
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: null
      })
    } else {
      // Found a token, send it to be verified
      axios.post('/auth/me/from/token', {token})
      .then(res => {
        if (res.data.type === 'error') {
          localStorage.removeItem('mernToken')
          this.setState({
            errorMessage: res.data.message
          })
        } else {
          // Put token in localStorage
          localStorage.setItem('mernToken', res.data.token)
          // Put token in state
          this.setState({
            token: res.data.token,
            user: res.data.user
          })
        }
      })
    }
  }

  componentDidMount() {
    this.checkForLocalToken()
  }

  // data contains user and token
  liftTokenToState({token, user}) {
    this.setState({
      token,
      user
    })
  }

  logout() {
    // Remove the token from localStorage
    localStorage.removeItem('mernToken')
    // Remove the user and token from state
    this.setState({
      token: '',
      user: null
    })
  }

  handleClick(e) {
    e.preventDefault()
    // axios.defaults.headers.common['Authorization'] = `Bearer ${this.state.token}`  this is for all axios calls
    // only include one token use this one
    let config = {
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    }
    axios.get('/locked/test', config).then(res => {
      console.log('this is the locked response:', res)
      this.setState({
        lockedResult: res.data
      })
    })
  }

  render() {
    let user = this.state.user
    let contents;
    if (user) {
      contents = (
      <div className="homeBox">
        <BrowserRouter>
          <div className="navBarBox">
            <nav>
              <Link to="/"> Home </Link> | {""}
              <Link to="/school"> Boot Camps </Link> | {""}
              <Link to="/trending"> Trending </Link>
            </nav>
          </div>
              {/* <UserProfile user={user} logout={this.logout} /> */}
              <p>{this.state.lockedResult}</p>
            <Route path ="/" exact render={() => <Home Home={Home} user={this.state.user} /> }/> 
            <Route path={`/profile/${this.state.user._id}`} render={() => ( <UserProfile user={this.state.user} logout={this.logout} /> )} />
            <Route path="/trending" exact render={() => <Trending Trending={Trending} /> }/>  
            <Route path="/school" exact render={() => <School bootcamp={this.state.bootcamp} /> } /> 
        </BrowserRouter> 
      </div>
      )
    } else {
      contents = (
        <>
          <Signup liftToken={this.liftTokenToState} />
          <Login liftToken={this.liftTokenToState} />
        </>
      )
    }
    return (
      <div className="App">
        <header><h1>Stackd</h1></header>
        <div className='content-box'>
          {contents}
        </div>  
      </div>
    );
  }
}




// <Route path='/' exact render={() => (<Home user={this.state.user} logout={this.logout} />)} />


export default App;
