
import React, {Component} from 'react';
import { Link } from 'react-router-dom'



class Tarot extends Component {
// constructor() {
//   super();
    

//   }
// }
// componentWillMount() {
//   this.setState({
//     posts: PostsData
    
//   });
// }
render(){
  return (
    <>
      <div className="container mt-5">
              
                    <p>
                        <Link to="/onecard" className="btn btn-primary">one card</Link> or <Link to="/theecard" className="btn btn-success">thee card</Link>
                    </p>

      </div>
    </>
  );
}
  
  
}

export default Tarot;