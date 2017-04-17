import React from 'react'
import TweetList from './TweetList'

var allTheTweetsInTheWurld = [
{
  id: 1, 
  username: "colinmckean",
  real_name: "Colin McKean",
  text: "My First tweet",
  timestamp: new Date("20017/04/15 10:21:19"),
  profile_url: "https://twitter.com/colinmckean_dev",
  avatar: "./img/default_1.png"


},
{
  id:2,
  username: "bigAl_2",
  real_name: "Alan Russell",
  text: "My best tweet ever to my followers",
  timestamp: new Date("20017/04/14 15:32:29"),
  profile_url: "https://twitter.com/ajrussellaudio",
  avatar: "./img/default.png"
}]

class Feed extends React.Component {
  constructor(props){
    super(props)
    this.state = {data: allTheTweetsInTheWurld}
  }
  render (){
    return (<div><h1> Welcome to your twitter feed</h1>
      <TweetList tweets={this.state.data} /></div>)
  }
}

export default Feed;

// Try and implement the other things a real-life Tweet might have. A timestamp? A URL to the user's page? A user's avatar or profile image? How could we implement these?