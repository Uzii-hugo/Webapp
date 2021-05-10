
import React, {Component} from 'react';
import PostsData from '../Data/PostsData'
import Card from './Card';


class Home extends Component {
constructor() {
  super();
    
  this.state = {
    posts: {}
  }
}
componentWillMount() {
  this.setState({
    posts: PostsData
    
  });
}
render(){
  console.log(this.componentWillMount);
  console.log(this.state.posts);
  return (
    <>
      {Object
          .keys(this.state.posts)
          .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)}
    </>
  );
}
}
export default Home;