import { useState } from 'react';
import './App.css';
import quotes from './assets/quotes.json';
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

interface Quote{
  quote: string;
  author: string;
}

const randQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const changeColour = (): string => {
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);

  return `rgb(${r},${g},${b})`;
} 

function App() {
  const [quote, setQuote] = useState<Quote>(randQuote());
  const [randColor, setRandomColor] = useState<string>(changeColour());


  const nextQuote = () => {
    setQuote(randQuote());
    setRandomColor(changeColour());

  };

  return (
  <div className="container" style={{backgroundColor: randColor}}>
    <div id="quote-box">
      <div className="quote-content">
        <FaQuoteLeft size="20" color={randColor}/>
        <h2 id="text" style={{color: randColor}}>{quote.quote} </h2>
        <FaQuoteRight size="20" color={randColor}/>
        <h4 id="author">- {quote.author}</h4>
      </div>
      <div className="btns">
        <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hastags=quotes&related=freecodecamp&text=${quote.quote}'}>
          <FaTwitter color="white" />
        </a>
        <button id="new-quote" onClick={nextQuote}>Next Quote</button>
      
      </div>
    </div>
  </div>
  );
}

export default App
