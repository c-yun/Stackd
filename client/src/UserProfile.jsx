import React, { Component } from 'react';
import axios from "axios"


class UserProfile extends Component {
constructor(props){
    super(props)
    this.state = {
        articles: [],
    }
}

componentDidMount() {
    axios.get(`/profile/${this.props.user._id}/articles`).then((res) => {
        console.log(res.data)
        this.setState({
            articles: res.data
        });
    });
}

render(){
    let articles = this.state.articles.map((article, index) => (
        <div key={index} className="savedArticles">
            <p> 
                {article.title}
                {article.author}
                {article.url}
                {article.userId}
            </p>
        </div>
    ))
    // console.log(articles)
    // console.log(this.props.articles)
    // console.log(this.props.user.articles)
    return (
        <div className='UserProfile'>
                {/* {this.state.articles} */}
                <p>Hello, {this.props.user.name}</p>
                {articles}
                <a onClick={this.props.logout}>Log Out!</a>
            </div>
        )
    }
}


export default UserProfile;