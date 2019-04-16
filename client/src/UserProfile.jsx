import React, { Component } from 'react';
import axios from "axios"
import { Button, Card, Col } from 'react-bootstrap';


class UserProfile extends Component {
constructor(props){
    super(props)
    this.state = {
        articles: [],
        currentArticle: null,
    }
    this.selectArticle = this.selectArticle.bind(this); 
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

selectArticle = (article) => {
    console.log("SELECTING AN ARTICLE !!!!! ")
    axios.get(`/profile/${this.props.user._id}/articles/${article._id}`)
    .then((res) => {
        this.setState({
            currentArticle: res.data,
        })
    })
}

render(){
    let selectArticle; 
    let articles = this.state.articles.map((article, index) => (
        <div key={index} className="savedArticles" >
        <Card onClick={() => this.selectArticle(article)}>  
                <h2>{article.title}</h2>
                <footer className="blockquote-footer"> {article.author} </footer>
                <p><a href={article.url}> Link To Article </a></p>
            <Button className="removeBtn" variant="secondary" onClick={ () => this.removeArticle(article._id) }> Remove Article </Button>
        </Card>
        </div>
    ))
    return (
        <div className='UserProfile'>
            <div className="userProfileInternalBox">
                <h4>Hello, {this.props.user.name}</h4>
                    <Col>
                        {articles}
                    </Col>
                <Button variant="info"><a onClick={this.props.logout}>Log Out!</a></Button>
            </div>
            </div>
        )
    }
}


export default UserProfile;