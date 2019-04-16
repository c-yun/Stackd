import React, { Component } from 'react';
// require('dotenv').config();
import {Card, Button, Row, Col, Jumbotron, Container, CardGroup, CardDeck, Image , Media} from "react-bootstrap"
import axios from 'axios';
import Vid from "./Images&Video/stacdVideo.mp4"
import { faBookmark, faStar} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import {Grid } from "semantic-ui-react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBookmark } from '@fortawesome/free-solid-svg-icons';

library.add(faBookmark, faStar)


class Home extends Component {
constructor(props){
   super(props)
   this.state = {
      newsApi: [],
      iconSelected: true,
      otherIcon: false, 
   }
   this.addToProfile = this.addToProfile.bind(this)
   // this.postAdd = this.postAdd.bind(this);
}


componentDidMount(){
   let newsApi = `https://newsapi.org/v2/everything?domains=techcrunch.com&language=en&pageSize=40&apiKey=47b1d9f9ee354c3992a16d4f94dddc69`
   axios.get(newsApi).then(response => {
      console.log(response.data.articles)
      this.setState({
         news:response.data.articles
      })
   }).catch( err => console.log(err))
}

postAdd = (object) => {
   console.log("hiting axios post route FRONTEND")
   axios.post(`/profile/${object.userId}/articles`, {
      title: object.title,
      author: object.author,
      url: object.url,
      userId: object.userId, 
   })
   .then((res) => {
      console.log(res)
      this.props.history.push(`profile/${this.props.user._id}`);
   })
   .catch(function(error) {
      console.log(error);
   });
}
addToProfile = (article) => {
let postObject ={
   title: article.title,
   author: article.author,
   url: article.url,
   userId: this.props.user._id,
}
this.postAdd(postObject);
}

iconBookmarkReady = (e) => {
   this.setState({
      iconSelected: false,
   })
}

iconBookmarkResting = (e) => {
   this.setState({
      iconSelected: true,
   })
}

render(){
   let bookmarkIcon;
   if(this.state.iconSelected === true) {
      console.log("STAR")
      bookmarkIcon=(
         <FontAwesomeIcon onClick={this.iconBookmarkReady} className="fontAwe" size="4x" icon={["fa", "star"]}/>
      )
      } else {
         console.log("BOOKMARK")
         bookmarkIcon=(
            <FontAwesomeIcon onClick={this.iconBookmarkResting} className="fontAwe" size="4x" icon={['fa', 'bookmark']}/>
         )
         
      }
   const news = this.state.news ?
   this.state.news.map((article, index) => (
      <div key={index} className="cardBox">
      <Col>
         <Card style={{width:"20em"}}>
            <Card.Img variant="top" src={article.urlToImage} />
               <Card.Body className="cardBody">
                  <h3> {article.title}</h3>
                  <p> {article.description}</p>
                  <footer className="blockquote-footer">
                  {article.author} 
               </footer>
               </Card.Body>
               <Card.Body>
                  <Row>
                     <Col>
                  <Card.Link href={article.url}><Button>Article</Button></Card.Link>
                     </Col>
                     <Col>
                  <Button onClick={() => this.addToProfile(article)}> bookmark</Button>
                     </Col>
                  </Row>
               </Card.Body>
         </Card> 
      </Col>
      </div>
   )): ""; 
   
   return(
      <div className="homeBox">
         <Jumbotron fluid>
            <video className="video-background" preload="true" muted="true" autoplay="true" loop="true"> 
               <source src={Vid} type="video/mp4" />
            </video> 
         </Jumbotron> 
   <br /> 
      <div className="headerTopStories">
         <h3 className="headerTopStory"> Top Trending Articles </h3>
      </div>
   <br /> 
   <div className="newsBox">
      <Row>
         {news}
      </Row>
   </div>
</div>
   
   
   )  
}
}
export default Home; 




