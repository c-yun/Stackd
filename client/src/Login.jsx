import React, {Component} from 'react';
import axios from 'axios';
import { Button, Card, Col, InputGroup, Row } from 'react-bootstrap';

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
            <div className='Login'>
                {/* <Card className="loginCard"> */}
                    <Row>
                        <Col>
                            <div className="logoImageBox">
                                <h1> Image Box </h1>
                                <p> Image goes here </p>
                            </div>
                        </Col>
                        <Col>
                            <Card>
                                <h1 className="headerLogin"> Stackd </h1>
                                <p> Connecting You To The Latest Tech Trends </p>
                                <h3 className="headerLogin">Log into your account</h3>
                                    <form onSubmit={this.handleSubmit}>
                                        <input onChange={this.handleEmailChange} value={this.state.email} type='email' name='email' placeholder='Enter your email...' /><br />
                                        <input onChange={this.handlePasswordChange} value={this.state.password} type='password' name='password' placeholder='Enter your password...' /><br />
                                        <input type ='submit' value='Log In!' />
                                    </form>
                            </Card>
                        </Col>
                    </Row>
                {/* </Card> */}
            </div>
        )
    }
}

export default Login;