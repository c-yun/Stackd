import React, { Component } from 'react';
import axios from "axios"
import { Button, Card, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';



// library.add(faUserAstronaut)

class UserProfile extends Component {
constructor(props){
    super(props)
    this.state = {
        articles: [],
        currentArticle: null,
        updateStart: false,
        bio: '', 
    }
    this.selectArticle = this.selectArticle.bind(this); 
    this.updateStart = this.updateStart.bind(this);
    this.updateBio = this.updateBio.bind(this);
}

componentDidMount() {
    axios.get(`/profile/${this.props.user._id}/articles`).then((res) => {
        console.log(res.data)
        this.setState({
            articles: res.data
        })
    })
}
filter = (id) =>{
    console.log("filter")
    console.log(id)
    return this.state.articles.filter((article)=> article._id !== id);
}

// added bio 
updateBio = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(`hiting the PUT AXIOS ROUTE ON FRONTEND`)
    axios.put(`/profile/${this.props.user._id}`, {
        bio: this.state.bio
    })
      .then(response => {
        console.log(response, "update Bio consoleLog")
        this.setState({updateStart: false}, () => {
            this.props.checkForLocalToken();
        })
      })
    // this.state.history.push(`/profile/${this.props.user._id}`)
  }

updateStart = (e) =>{
    console.log("update conditional rendering")
    this.setState({
        updateStart: true,
    })
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

handleChange = (e) => {
    this.setState({
        bio: e.target.value
    })
}

render(){ 
    let articles = this.state.articles.map((article, index) => (
        <div key={index} className="savedArticles" >
        <Card onClick={() => this.selectArticle(article)}>  
                <h2>{article.title}</h2>
                <footer className="blockquote-footer"> {article.author} </footer>
                <a href={article.url}> <Button variant="success"> Link To Article </Button></a>
            <Button className="removeBtn" variant="secondary" onClick={ () => this.removeArticle(article._id) }> Remove Article </Button>
        </Card>
        </div>
    ))

    ////////////////////////////////////////// BIO CONDITIONAL RENDERING ///////////////////////////////////////////////////

    ////////////////////////////////////////// BIO UPDATE  //////////////////////////////////////////
    let updateBox;
    if(this.state.updateStart === true){
        updateBox = 
            <div className="updateForm" >
                <form  onSubmit={this.updateBio}>
                    <input value={this.state.bio} type='bio' name='bio' onChange={this.handleChange} placeholder="looking good 😀" /><br />
                    <input type='submit' value='Update!' />
                </form>
            </div>
    } else {
        updateBox = 
        <div className="yourBio">
            <p> About Me: {this.props.user.bio} </p>
            <Button onClick={this.updateStart} > Update Your Bio  </Button>
        </div>
    }
    ///////////////////////////////////////// ARTICLE CONDITIONAL RENDERING ////////////////////////////////////
    if (this.state.articles.length){
        articles = this.state.articles.map((article, index) => (
            <div key={index} className="savedArticles" >
            <Card onClick={() => this.selectArticle(article)}>  
                    <h2>{article.title}</h2>
                    <footer className="blockquote-footer"> {article.author} </footer>
                    <p><a href={article.url}> Link To Article </a></p>
                <Button className="removeBtn" variant="secondary" onClick={ () => this.removeArticle(article._id) }> Remove Article </Button>
            </Card>
            </div>
        ))
    } else {
        articles = <h1> No Saved Articles</h1>
    }
    ///////////////////////////////////////////// RETURN ////////////////////////////////////////////////////////////
    return (
        <div className='UserProfile'>
        <h4 className="profile"> Profile </h4>
            <section>
                <header>
                    {this.props.user && (<Link to='/profile/update'></Link>)}
                </header>
            </section>
            <div className="userProfileInternalBox">
            <br /> 
                <div className='profilePic'>
                    {(this.props.user.image && (
                        <img src={this.props.user.image} alt='user' />)) || (
                        <img src='https://i.imgur.com/UDo14lr.png' alt='placeholder' />
                )}
                </div>
                <h4 className="userProfileHeader">Hello {this.props.user.name}, Looking Good </h4>
                            {updateBox}
                    <Col>
                        <br /> 
                            {articles}
                        <br /> 
                    </Col>
                <Button variant="info"><a onClick={this.props.logout}>Log Out!</a></Button>
            </div>
            </div>
        )
    }
}


export default UserProfile;