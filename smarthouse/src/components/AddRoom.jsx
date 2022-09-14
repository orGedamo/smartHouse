import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Main.css'

export default function AddRoom(props) {

    const[roomType,setRoomType] = useState('');
    const[roomName,setRoomName] = useState('');
    const[roomColor,setRoomColor] = useState('');

    const validAll=()=>{
      // debugger;
      if (roomName.length>=1 && roomType !== 'null' && roomType.length!==0) {
        props.add(roomType,roomName,roomColor)
        }
        else{
          alert('ERROR')
          setRoomName('');
          setRoomType('');
          setRoomColor(''); 
      }
    }

  return (
    <div className='addP'>
      <div id='header'><h1 style={{fontWeight:'lighter'}}>Keemple</h1></div>
      <div className='addRoomContainer'>
         <div className='addRommImg'>

         </div>
         <div className='roomInfo'>
            <select id='select' onChange={(element)=>{setRoomType(element.target.value)}}>
            <option value='null'>--please choose--</option>
            <option value='bedroom'>Bedroom</option>
            <option value='bathroom'>Bathroom</option>
            <option value='kitchen'>Kitchen</option>
            </select><br></br>
            <input id='inpt' maxLength='5' onChange={(element)=>{setRoomName(element.target.value)}} type='text' placeholder='Room name'></input><br></br>
            <input id='inptColor' onChange={(element)=>{setRoomColor(element.target.value)}} type='color' placeholder='Room color'></input><br></br>
            <Link to='/rooms'><button className="button" id='addRoomBtn' onClick={validAll}>Create!</button></Link>
          </div>
      </div>
    </div>
  )
}

