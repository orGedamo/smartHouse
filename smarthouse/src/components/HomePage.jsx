import React from 'react'
import {Link} from 'react-router-dom'
import './Main.css'
import Popup from './Popup'
import Room from './Room'

export default function HomePage(props) {
  return (
    <div className='homeP'>
      <div style={{display:'flex', justifyContent:'space-between',
      // flexDirection: 'row-reverse'
      }}>
        <div id='headerHome'><h1>keemple</h1> <h4>keep it simple</h4></div>
        <div><Popup/></div>
      </div>
        
        <div id='roomDiv'>{props.roomsArr.map((val,i)=>{
          // debugger;
          return <Room index={i} key={i} device={props.device} pick={props.pick} roomName={val.roomName} roomType={val.roomType} roomColor={val.roomColor} />
        })}</div>
        <div id='homeBtn' style={{paddingTop:'50px'}}><Link to='/addRoom'><button className="button">add room+</button></Link></div>
    </div>
  )
}
