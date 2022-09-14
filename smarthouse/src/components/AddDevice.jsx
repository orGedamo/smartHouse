import React,{useState} from 'react'
import './Main.css'
import {Link, useNavigate} from 'react-router-dom'

export default function AddDevice(props) {

  const[roomDevice,setRoomDevice] = useState({});
  const nev = useNavigate();

  const check=()=>{
    debugger;
    let alertMs = document.getElementById('alertMs');
    if(roomDevice.length===0 || roomDevice==='null'){
      return alertMs.innerHTML = 'please choose room device';
    }
    if(props.room.roomDivices.length<5){
      alertMs.style.display='none';
      if(roomDevice === 'stereosystem'){
        if (props.room.roomDivices.some(e => e.name === 'stereosystem')) {
          alert('you can only add one stereo system to each room')
        }
        else{
          props.room.roomDivices.push({name:roomDevice,state:false});
        }

      }
      if(roomDevice ==='boiler'){
        if(props.room.roomType !== 'bathroom')
        alert ('you can only add boiler to a bathroom')
        else{
          props.room.roomDivices.push({name:roomDevice,state:false});
        }
      }
      if(roomDevice === 'airconditioner' || roomDevice === 'lamp')
      props.room.roomDivices.push({name:roomDevice,state:false});
      console.log(props.room);
    }
    else{
      alert('you can only add 5 devices')
    }
  }
  
  return (
    <div>
        <div id='addDiv'>
          <select id='select' onChange={(element)=>{setRoomDevice(element.target.value)}}>
            <option value='null'>--please choose--</option>
            <option value='airconditioner'>Air-Conditioner</option>
            <option value='lamp'>Lamp</option>
            <option value='stereosystem'>Stereo System</option>
            <option value='boiler'>Boiler</option>
          </select> <br></br>

          <div id='alertMs' style={{padding:'15px'}}></div>
          <Link to='/rooms'><button className="button" onClick={check}>add+</button></Link>
          <Link to='/rooms'><button className="button">Go back</button></Link>
        </div>
    </div>
  )
}
