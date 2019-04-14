import React, { Component } from 'react';
import {Card, Button, Row, Col} from "react-bootstrap"
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(faStroopwafel)

class Home extends Component {
constructor(props){
   super(props)
   this.state = {
      newsApi: []
   }
}

componentDidMount(){
   let newsApi = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=47b1d9f9ee354c3992a16d4f94dddc69"
   axios.get(newsApi).then(response => {
      console.log(response.data.articles)
      this.setState({
         news:response.data.articles
      })
   }).catch( err => console.log(err))
}

render(){
   const news = this.state.news ?
   this.state.news.map((article, index) =>(
      <div key={index}>
            <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={article.urlToImage} />
                  <Card.Body>
                     <Card.Title>{article.title}</Card.Title>
                     <Card.Text> {article.description} by {article.author}</Card.Text>
                     <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
            </Card>
      </div>
   )): ""; 

   return(
      <div className="homeBox">
         <h1> Homepage </h1>
         <br /> 
         <Row>
               <br />
               {news}
               <br />            
         </Row>      
      </div>
   
   
   )  
}


}
export default Home; 

