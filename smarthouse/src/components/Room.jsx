import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Main.css'

export default function Room(props) {

  const[diffColor,setDiffColor]=useState('')
  useEffect(() => {debugger
    let room = props.roomColor;
    room = room.slice(1,room.length-1)
      let r = parseInt(room.substr(0,2),16);
      let g = parseInt(room.substr(2,2),16);
      let b = parseInt(room.substr(4,2),16);
      let yiq = ((r*299)+(g*587)+(b*114))/1000;
      return (yiq >= 128) ? setDiffColor('black') : setDiffColor('white');
  },[])


  return (
    <div>
              <Link to='/roomPage'>
            <div onClick={()=>{props.pick(props.index)}} id='roomSqr' style={{backgroundColor: props.roomColor, opacity:'.8', borderColor:diffColor}}>
                <h1 style={{color:diffColor}}>{props.roomName}</h1>
            </div>
              </Link>
    </div>
  )
}
