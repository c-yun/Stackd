import React, {Component} from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import {ReactComponent as Logo} from './Images&Video/logo.svg';
import Footer from "./Components/Footer"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            message: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        axios.post('/auth/login', {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            console.log("we got this from axios:", res.data)
            if (res.data.type === 'error') {
                this.setState({
                    message: res.data.message
                })
            } else {
                localStorage.setItem('mernToken', res.data.token)
                this.props.liftTokenToState(res.data)
            }
        }).catch(err => {
            this.setState({
                message: 'Maximum login attempts exceeded. Please try again later.'
            })
        })
    }

    render() {
        return (
            <div className="footerDiv">
            <div className='Login'>
                {/* <Card className="loginCard"> */}
                                <Logo />
                                <p className="slogan"> Connecting You To The Latest Tech Trends </p>
                            <Card>
                                {/* <h1 className="headerLogin"> Stackd </h1> */}
                                <h3 className="headerLogin">Log into your account</h3>
                                    <form className="loginForm" onSubmit={this.handleSubmit}>
                                        <input onChange={this.handleEmailChange} value={this.state.email} type='email' name='email' placeholder='Enter your email...' /><br />
                                        <input onChange={this.handlePasswordChange} value={this.state.password} type='password' name='password' placeholder='Enter your password...' /><br />
                                        <input type ='submit' value='Log In!' /> 
                                    </form>
                            </Card>
                {/* </Card> */}
            </div>
            <Footer /> 
            </div>
        )
    }
}

export default Login;