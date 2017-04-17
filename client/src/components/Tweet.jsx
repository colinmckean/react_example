import React from 'react'

class Tweet extends React.Component {

  constructor(props) {
    super(props)
  }
  render( props){
    return (<div> <h3> {this.props.real_name}</h3>
      <a href={this.props.profile_url}>{this.props.username}</a>
      <p>{this.props.children}</p>
      <p> {new Date(this.props.timestamp).toString()} </p></div>)
  }
}

export default Tweet;

