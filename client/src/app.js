import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './components/Feed'

window.onload = function(){
  ReactDOM.render(
    <Feed />,
    document.getElementById('app')
  );
}



// # Let's build Twitter!

// Twitter is a software company with over 300 million monthly active users, trading on the New York Stock Exchange with an estimated annual revenue of $2.52 billion USD. Let's build their software overnight!

// ## Wait, what?

// Ok, so maybe our version won't have _all_ the features Twitter has, but we can at least build a feed of Tweets in React.

// Let's say that a user's **Feed** is made up of a **TweetList** that consists of multiple **Tweet**s. 

// Let's also say that a single Tweet has an **id**, a **username**, a **real name** and some **text**. 

// Let's populate all that stuff with sample data and call that our MVP.

// Maybe you're already thinking of a solution in React. If not, have a read of this (30 mins): https://facebook.github.io/react/docs/thinking-in-react.html

// ### Extensions

// Try and implement the other things a real-life Tweet might have. A timestamp? A URL to the user's page? A user's avatar or profile image? How could we implement these?