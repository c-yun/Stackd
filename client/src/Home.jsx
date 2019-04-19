import React, { Component } from 'react';
// require('dotenv').config();
import {Card, Button, Row, Col, Jumbotron, Alert} from "react-bootstrap"
import axios from 'axios';
import Vid from "./Images&Video/stackdVideo.mp4"
import { faBookmark, faStar} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import Footer from "./Components/Footer"

// import {Grid } from "semantic-ui-react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBookmark } from '@fortawesome/free-solid-svg-icons';

library.add(faBookmark, faStar)

function simulateNetworkRequest() {
   return new Promise(resolve => setTimeout(resolve, 2000));
}


class Home extends Component {
constructor(props){
   super(props)
   this.state = {
      newsApi: [],
      savedBookmark: true, 
      isLoading: false,
      coin: [],
   }
   this.addToProfile = this.addToProfile.bind(this)
   this.handleClick = this.handleClick.bind(this);
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

handleClick() {
   this.setState({ isLoading: true }, () => {
      simulateNetworkRequest().then(() => {
      this.setState({ isLoading: false });
      });
   });
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
   console.log("Added to profile")
let postObject ={
   title: article.title,
   author: article.author,
   url: article.url,
   userId: this.props.user._id,
}
this.postAdd(postObject);
}

iconBookmarkPicked = (e) => {
   this.setState({
      savedBookmark: false,
   })
}


render(){
   const { isLoading } = this.state;
   if(this.state.savedBookmark === false) {
      console.log("bookmark selected")
      return(
            <div>  
               <Alert variant="success">
               <Alert.Heading>Hey, nice to see you</Alert.Heading>
            </Alert>
         </div>
      )
      } else {
         console.log("nothing bookmarked")
         
      }
   const news = this.state.news ?
   this.state.news.map((article, index) => (
      <div key={index} className="cardBox">
      <Col>
         <Card style={{width:"22em"}}>
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
                        <div onClick={() => this.addToProfile(article)} className="bookmark">
                        <Button variant="primary" disabled={isLoading} onClick={!isLoading ? this.handleClick : null}> {isLoading ? 'Saved!' : 'Click to Save'} </Button>
                     </div>
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
            <video className="video-background" preload="true" muted={true} autoPlay={true} loop={true}> 
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
         {/* <h1> Hello stuf here </h1> */}
      </Row>
   </div>
      <Footer /> 
</div>
   
   
   )  
}
}
export default Home; 




