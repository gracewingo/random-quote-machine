import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import "./App.css"

library.add(fab, faTwitter)

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: [
        ["Tell me, what is it you plan to do with your one wild and precious life?", "Mary Oliver"], 
        ["Tell me, what is it you plan to do with your one wild and precious life?", "Mary Oliver"], 
        ["My life story is the story of everyone I've ever met.", "Jonathan Safran Foer"], 
        ["Be So Good They Can't Ignore You.", 'Steve Martin'], 
        ["“The most beautiful part of your body is where it’s headed. & remember, loneliness is still time spent with the world.", "Ocean Vuong"],
        ["“Dear God, if you are a season, let it be the one I passed through to get here. Here. That's all I wanted to be. I promise.", "Ocean Vuong"],
        ["All possibilities are available right now.", "Abraham Hicks"],
        ["I want to put a ding in the universe.", "Steve Jobs"]
      ],
        randomQuote: "",
        randomAuthor: "",
        tweetQuote: ""
    }
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }
  //try this way first, then try making new quote it's own component 
  getRandomQuote(){
    let randomIndex = Math.floor(Math.random() * this.state.quotes.length);
    this.setState(function(prevState){
      return {
        randomQuote: prevState.randomQuote = this.state.quotes[randomIndex][0],
        randomAuthor: prevState.randomAuthor = " - " + this.state.quotes[randomIndex][1],
        tweetQuote: "https://twitter.com/intent/tweet?hashtags=quotes&text=" + this.state.randomQuote
      };
    })
  }
  
  componentDidMount(){
    this.getRandomQuote();
  }

  render(){
      //
    return (
      <div id ="quote-box">
        <div id="text">{this.state.randomQuote}</div>
        <h2 id="author">{this.state.randomAuthor}</h2>
        <button onClick={this.getRandomQuote} className="button" id="new-quote">New Quote</button>
        <button className="button">
          <a href={this.state.tweetQuote}
        title="Tweet this quote!" id="tweet-quote" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="what" icon={['fab', 'twitter']} /></a>
        </button>
        
      </div>
    )
  }
}

export default App;