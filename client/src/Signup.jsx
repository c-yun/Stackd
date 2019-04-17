import React, {Component} from 'react';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            bio:'',
            // bio added here

        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleBioChange = this.handleBioChange.bind(this)
            // bio added here
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
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

    handleBioChange(e) {
        this.setState({
            bio: e.target.value
            // bio added here
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        axios.post('/auth/signup', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            bio: this.state.bio
            // bio added here
        }).then(res => {
            console.log("we are getting data SIGNUP", res.data )
            if (res.data.type === 'error') {
                console.log('ERROR:', res.data.message)
            } else {
                localStorage.setItem('mernToken', res.data.token)
                this.props.liftTokenToState(res.data)
            }
        }).catch(err => {
            // This block catches the rate limiter errors
            this.setState({
                message: 'Maximum accounts exceeded. Please try again later.'
            })
        })
    }

    render() {
        return (
            <div className='Signup'>
                <h1 className="headerSignUp">Stackd </h1>
                    <p> Connecting You To The Latest Tech Trends </p>
                <h3 className="headerSignUp">Create a new account:</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleNameChange} value={this.state.name} type='text' name='name' placeholder='First And Last Name..' /><br />
                    <input onChange={this.handleEmailChange} value={this.state.email} type='email' name='email' placeholder='Your email...' /><br />
                    <input onChange={this.handlePasswordChange} value={this.state.password} type='password' name='password' placeholder='Choose a password...' /><br />
                    <input onChange={this.handleBioChange} value={this.state.bio} type='bio' name='bio' placeholder='About Me...' /><br />
                    {/* // bio added here  */}
                    <input type='submit' value='Sign Up!' />
                </form>
            </div>
        )
    }
}

export default Signup;