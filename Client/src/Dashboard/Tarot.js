
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Center from 'react-center';
import card1 from '../img/icon (1).png';
import card2 from '../img/icon (2).png';


class Tarot extends Component {
  render() {
    return (
      <>
        <div className="container_pick">
          <h3>เลือกการดูไพ่ยิปซี</h3>
          <Center className="padding">
            <div className="pick" >
            <Link to="/onecard"><img className="cardPick" src={card1} /></Link>
              <Center>
                <Link to="/onecard"><a>ดูดวงรายวัน</a></Link>
              </Center>
            </div>
          </Center>
          <Center className="padding">
            <div className="pick" >
            <Link to="/theecard"><img className="cardPick" src={card2} /></Link>
              <Center>
                <Link to="/theecard">ดูดวงอดีต ปัจจุบัน อนาคต</Link>
              </Center>
            </div>
          </Center>
        </div>
      </>
    );
  }


}

export default Tarot;