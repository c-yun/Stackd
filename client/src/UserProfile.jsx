import React, { Component } from 'react';

class UserProfile extends Component {
constructor(props){
    super(props)
}
render(){
        return (
            <div className='UserProfile'>
                <p>Hello, {this.props.user.name}</p>
                <a onClick={this.props.logout}>Log Out!</a>
            </div>
        )
    }
}


export default UserProfile;