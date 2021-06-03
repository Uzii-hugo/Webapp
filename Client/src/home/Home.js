
import React, { Component } from 'react';
import PostsData from '../Data/PostsData'
import Card from './Card';
import Image from '../img/background-1.png';


class Home extends Component {
  constructor() {
    super();

    this.state = {
      posts: {}
    }
  }
<<<<<<< HEAD
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
    <div>
      <img src = {Image} className ="banner"/>
      <div className ="ContainerCard"> <h1>New Content.</h1>
        {Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)}
      </div>
    </div>
  );
}
=======
  componentWillMount() {
    this.setState({
      posts: PostsData

    });
  }
  render() {
    console.log(this.componentWillMount);
    console.log(this.state.posts);
    return (
      <>
        <img src={Image} className="banner" />
        <div className="ContainerCard">
          {Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]} />)}
        </div>
      </>
    );
  }
>>>>>>> boss
}
export default Home;