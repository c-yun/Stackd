import React, { Component } from 'react';
import {Card, Button, Row, Col, Jumbotron, Container} from "react-bootstrap"
import axios from 'axios';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBookmark } from '@fortawesome/free-solid-svg-icons';

library.add(faBookmark)

class Home extends Component {
constructor(props){
   super(props)
   this.state = {
      newsApi: [],
      comments: [],
   }
   this.addToProfile = this.addToProfile.bind(this)
}


componentDidMount(){
   let newsApi = "https://newsapi.org/v2/everything?domains=techcrunch.com,wired.com,&language=en&pageSize=40&apiKey=47b1d9f9ee354c3992a16d4f94dddc69"
   axios.get(newsApi).then(response => {
      console.log(response.data.articles)
      this.setState({
         news:response.data.articles
      })
   }).catch( err => console.log(err))
}

postAdd = (object) => {
   axios.post(`/profile/${object.userId}/uploads`, {
      articleId: object.articleId,
      comments: object.comments,
      profilePic: object.profilePic,
      date: object.date, 
   })
   .then((res) => {
      console.log(res)
      this.props.history.push(`profile/${this.props.user._id}`);
   })
   .catch(function(error) {
      console.log(error);
   });
}
addToProfile = () => {
let date = new Date();
let postObject ={
   userId: this.props.user._id,
   articleId: this.props.articleId,
   comments: this.props.comments,
   date: date,
}
this.postAdd(postObject);
}

render(){
   const news = this.state.news ?
   this.state.news.map((article, index) => (
      <div key={index}>
      <Container>
         <Row>
         <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={article.urlToImage} />
               <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text> {article.description} by {article.author}</Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                     <Card.Link href={article.url}> Link </Card.Link> <br /> 
                     <Button onClick={this.addToProfile}> Add To Profile </Button>
            </Card.Body>
         </Card>
         </Row>
      </Container>
      </div>
   )): ""; 

   return(
      <div className="homeBox">
         <Jumbotron fluid>
            <Container>
            <h1>For All Your Tech Needs </h1>
            <p>
               some text goes here balblalblablalba 
            </p>
            </Container>
      </Jumbotron>
         <br /> 
         <Row>
            {news}
         </Row>
      </div>
   
   
   )  
}


}
export default Home; 

