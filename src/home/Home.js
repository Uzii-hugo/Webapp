
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
      <div className = 'container'>
<<<<<<< HEAD
      {Object
          .keys(this.state.posts)
          .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)}
=======
        <Card></Card>
>>>>>>> boss
      </div>
    </>
  );
}
}
export default Home;