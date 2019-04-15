import React, { Component } from 'react';
import axios from "axios"
import { Button, Card } from 'react-bootstrap';


class UserProfile extends Component {
constructor(props){
    super(props)
    this.state = {
        articles: [],
        currentArticle: null,
    }
    // this.removeArticle = this.removeArticle.bind(this); 
}

componentDidMount() {
    axios.get(`/profile/${this.props.user._id}/articles`).then((res) => {
        console.log(res.data)
        this.setState({
            articles: res.data
        });
    });
}
filter = (id) =>{
    console.log("filter")
    console.log(id)
    return this.state.articles.filter((article)=> article._id !== id);
}


removeArticle = (id) => {
    console.log("removing article frontend");
    this.setState({articles: this.filter(id), currentArticle: null});
    axios.delete(`/profile/${this.props.user._id}/articles/${id}`)
    .then((res) => {
        console.log("axios delete route engaged", res)
    })
    .catch((err)=>{
        console.log(err, "lol fuck")
    })
}



render(){
    let articles = this.state.articles.map((article, index) => (
        <div key={index} className="savedArticles">
        <Card>  
                <h2>{article.title}</h2>
                <h4>Published By: {article.author}</h4>
                <p><a href={article.url}>Source</a></p>
            <Button  variant="primary" onClick={ () => this.removeArticle(article._id) }> Delete </Button>
        </Card>
        </div>
    ))
    return (
        <div className='UserProfile'>
                {/* {this.state.articles} */}
                <p>Hello, {this.props.user.name}</p>
                {articles}
                <Button><a onClick={this.props.logout}>Log Out!</a></Button>
            </div>
        )
    }
}


export default UserProfile;