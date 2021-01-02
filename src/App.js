import './App.css';
import Head from './components/layout/Head';
import SearchBar from './components/SearchBar';
import React, { Component } from 'react';
import axios from 'axios';
import Articles from './components/Articles';
import ShowingResults from './components/layout/ShowingResults';
//const NewsAPI = require('newsapi');
//const newsapi = new NewsAPI('cdd814705fa840f887697f712d85ca4f');
const Sentiment = require('sentiment');


class App extends Component {




  state = {
    topic: 'puppies',
    location: 'United States',
    year: 2020,
    index: 0,
    articles: []
  };


  componentDidMount() {
    const top = this.state.topic;
    var ind = 1;
    var count = 0;
    
     const options = {
  method: 'GET',
  url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
  params: {
    q: top,
    pageNumber: ind,
    pageSize: '50',
    autoCorrect: 'true',
    fromPublishedDate: 'null',
    toPublishedDate: 'null'
  },
  headers: {
    'x-rapidapi-key': 'fd23c58a81msh7049a97dee982abp1d9c90jsne07e42deb39e',
    'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
  }
};

axios.request(options).then( (response)=> {
  console.log(response.data);
  var art = [];
  response.data.value.forEach(element => {
    console.log(element);
    var sentiment = new Sentiment();
    var result = sentiment.analyze(element.title).comparative;
    var resultT=sentiment.analyze(element.description).comparative;
    if (result>=0 && resultT>=0){ art.push(element)}
    console.log(result);
  });
  this.setState({
    articles: this.state.articles.concat(art)
  });
}).catch(function (error) {
	console.error(error);
});
  
    
  }

  addSearch = (topic) => {
    this.setState({
      topic: topic,
      index: 1,
      articles: []
    });
    console.log(this.state);
    this.componentDidMount();

  }
  

  checkArticles(){
    if (this.state.articles.length > 4 || this.state.index>2 ) {
      
    }
    else {
      this.setState({
        index: this.state.index + 1
      });
      this.componentDidMount();
    }
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <header className="App-header">
            <Head />
            <SearchBar addSearch={this.addSearch} />
            <ShowingResults topic={this.state.topic} />
            <Articles topic={this.state.topic} articles={this.state.articles} />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
