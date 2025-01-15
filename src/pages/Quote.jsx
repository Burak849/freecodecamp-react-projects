import React, { useState, useEffect, useCallback  } from 'react';
import $ from 'jquery'; 
import '../App.css';


const Quote = () => {
  const [quotesData, setQuotesData] = useState(null);

 
 
  const getQuotes = () => {
    $.ajax({headers: {Accept: 'application/json'}, url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      success: function (jsonQuotes) {
        if (typeof jsonQuotes === 'string') {
          const parsedQuotes = JSON.parse(jsonQuotes);
          setQuotesData(parsedQuotes);
        }
      }
    });
  };

  const getRandomQuote = useCallback(() => {
    return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
  }, [quotesData]);

  const getQuote = useCallback(() => {
    if (!quotesData) return;
    const randomQuote = getRandomQuote();
    const { quote, author } = randomQuote;

    $('#tweet-quote').attr(
      'href',
      'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
        encodeURIComponent('"' + quote + '" ' + author)
    );

    $('#tumblr-quote').attr(
      'href',
      'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
        encodeURIComponent(author) +
        '&content=' +
        encodeURIComponent(quote) +
        '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
    );

    $('.quote-text').animate({ opacity: 0 }, 500, function () {
      $(this).animate({ opacity: 1 }, 500);
      $('#text').text(quote);
    });

    $('.quote-author').animate({ opacity: 0 }, 500, function () {
      $(this).animate({ opacity: 1 }, 500);
      $('#author').text(author);
    });

}, [quotesData, getRandomQuote]);

useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    if (quotesData) {
      getQuote();
    }
  }, [quotesData, getQuote]);

  return (
    <div className='wrapper' id="wrapper">
      <div className='quoteclass' id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"></i><span id="text"></span>
        </div>
        <div className="quote-author">- <span id="author"></span></div>
          <button className="buttonclass" style={{background:'black', color:'white'}} id="new-quote" onClick={getQuote}>New quote</button>
      </div>
    </div>
  );
};

export default Quote;
