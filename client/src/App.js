import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
// import Footer from "./Components/Footer"
import Home from "./Home"; 
import Library from "./Library"
import School from "./School"
import Trending from "./Trending"
import Login from './Login';
import UserProfile from './UserProfile';
import UpdateProfile from './UpdateProfile';
import {BrowserRouter, Route} from "react-router-dom"
import axios from 'axios';
import {schools} from './data/schools';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Nav, Navbar} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faGraduationCap, faHome, faUserNinja, faBook} from '@fortawesome/free-solid-svg-icons';


import Loading from './Components/Loading';

library.add(faChartLine, faGraduationCap, faHome, faBook, faUserNinja)


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      user: null,
      errorMessage: '',
      lockedResult: '',
      bootcamp: {schools},
      loading: true,
      loginSelected: false,
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.checkForLocalToken = this.checkForLocalToken.bind(this)
    this.logout = this.logout.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.loginClick = this.loginClick.bind(this);
    this.signUpClick = this.signUpClick.bind(this);
  }

  checkForLocalToken() {
    // Look in localStorage for the token
    let token = localStorage.getItem('mernToken')
    if (!token || token === 'undefined') {
      // There is no token
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: null,
        
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
    loadingScreen().then(() => this.setState({ loading: false }));
  }

  // data contains user and token
  liftTokenToState({token, user}) {
    this.setState({
      token: token,
      user: user,
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
    axios.get('/locked/test', config).then((res) => {
      // console.log('this is the locked response:', res)
      this.setState({
        lockedResult: res.data
      })
    })
  }

loginClick = (e) => {
  this.setState({
    loginSelected: true,
  });
};

signUpClick = (e) =>{
  this.setState({
    loginSelected: false,
  });
};


  render() {
    const {loading} = this.state
    if (loading) {
      return <Loading />;

    }
    // let contents;
    let logbox;
    if(this.state.loginSelected === true){
      logbox = (
        <div className="ifLogbox">
      <br /> 
      <div className='logboxContainer'>
          <h4 variant="primary" className="loginBtn" onClick={this.loginClick}> {' '} Login{' '} </h4>
          <h4 variant="primary" className="loginBtn" onClick={this.signUpClick}> {' '} Register{' '} </h4>
            <Login className='liftStateLogin' liftTokenToState={this.liftTokenToState} />
      </div> 
      <br /> 
    </div>
      )
    } else {
      logbox = (
        <>
          <div className='logboxContainer'>
            <div className='logboxLoginDiv'>
              <h4 variant="primary"
                className={`${
                  this.state.loginSelected ? 'loginText' : 'loginTextSelected'
                }`} onClick={this.loginClick}>
                Login
              </h4>
              <h4 variant="primary"
                className={`${
                  this.state.loginSelected ? 'signupText' : 'signupTextSelected'
                }`}
                onClick={this.signUpClick}
              >
                Register
              </h4>
            </div>
            <Signup liftTokenToState={this.liftTokenToState} />
          </div>
        </>
      );
    }
    let user = this.state.user;
    let contents;
    if (user) {
      contents = (
      <BrowserRouter>
        <div className="homeBox">
          <div className="banner">
            <h1 className="bannerHeader">Stackd</h1>
            </div>
            <div className="navBarBox">
              <nav>
                <Navbar bg="dark" variant="dark">
                  {/* <Navbar.Brand href="/" className='brand'>Stackd</Navbar.Brand> */}
                    <Nav className="mr-auto">
                      <Nav.Link href="/">
                        <FontAwesomeIcon className="fontAwe" size="2x" icon="home"/>{""} 
                      </Nav.Link> 
                      <Nav.Link href="/school">  
                        <FontAwesomeIcon className="fontAwe" size="2x" icon="graduation-cap"/>{""} 
                      </Nav.Link>
                      <Nav.Link href="/trending">
                        <FontAwesomeIcon className="fontAwe" size="2x" icon="chart-line"/>{""} 
                      </Nav.Link>
                      <Nav.Link href="/library">
                        <FontAwesomeIcon className="fontAwe" size="2x" icon="book"/>{""} 
                      </Nav.Link>
                      <Nav.Link href={`/profile/${this.state.user._id}`}>
                        <FontAwesomeIcon className="fontAwe" size="2x" icon="user-ninja"/>{""} 
                      </Nav.Link>
                  </Nav>
                </Navbar>
            </nav>
          </div>
              {/* <UserProfile user={user} logout={this.logout} /> */}
              {/* <p>{this.state.lockedResult}</p> */}
            <Route path="/" exact render={() => <Home Home={Home} user={this.state.user} /> }/> 
            <Route path="/library" exact render={() => <Library Library={Library} />} /> 
            <Route path={`/profile/${this.state.user._id}`} exact render={() => ( <UserProfile user={this.state.user} checkForLocalToken={this.checkForLocalToken} logout={this.logout} /> )} />
            {/* <Route path={`/profile/${this.state.user._id}/edit`} exact render={() => (<UserProfile user={this.state.user}  logout={this.logout}  /> )} />   */}
            <Route path="/trending" exact render={() => <Trending Trending={Trending} /> }/>  
            <Route path="/school" exact render={() => <School bootcamp={this.state.bootcamp} /> } /> 
            <Route path='/profile/update' render={() => <UpdateProfile user={this.state.user} />} />
        </div>
      </BrowserRouter> 
      )
    } else {
      contents = <div className='logBox'>
        {logbox}
      </div>
    }
    return (
      <div className="App">
          <div className='contentBox'>
              {contents}
            
            </div>
      </div>
    );
  }
}

function loadingScreen() {
  return new Promise((resolve) => setTimeout(() => resolve(), 20));
}






export default App;