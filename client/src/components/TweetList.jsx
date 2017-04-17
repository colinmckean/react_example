import React from 'react'
import Tweet from './Tweet'

class TweetList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const tweets = this.props.tweets.map((tweet) =>{
      return (<Tweet key={tweet.id} username={tweet.username} real_name={tweet.real_name} timestamp={tweet.timestamp} profile_url={tweet.profile_url}>  
        <img src={tweet.avatar}/>{
          tweet.text}
          </Tweet>)
    });
    return (<div>{tweets} </div>)
  }
}

export default TweetList;