import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaTwitterSquare } from "react-icons/fa";

function RandomQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  }, []);

  let fetchNewQuote = () => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  };
  return (
    <div className="container">
      <div id="quote-box">
        <h3 id="text">
          <span className="icon">
            <FaQuoteLeft />
          </span>
          {quote}
        </h3>
        <p id="author">- {author} -</p>
        <div className="buttons">
          <button className="btn" id="new-quote" onClick={fetchNewQuote}>
            New Quote
          </button>
          <a
            href={
              "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
              encodeURIComponent('"' + quote + '" ' + author)
            }
            target="_blank"
            id="tweet-quote"
          >
            <FaTwitterSquare />
          </a>
        </div>
      </div>
    </div>
  );
}
export default RandomQuote;
