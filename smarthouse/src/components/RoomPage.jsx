import React,{useState,useEffect} from 'react'
import AddDevice from './AddDevice';
import './Main.css'
import RoomDetails from './RoomDetails';
import { Link } from 'react-router-dom';

export default function RoomPage(props) {

    const[flag,setFlag]=useState(false);

    const showAddDiv=()=>{
        if (flag===true) {
            document.getElementById('RPBtn').style.display ="none";
            return <AddDevice room={props.pick[0]} flag={flag} //flag={props.setFlag(props.flag)}//
            />
        }
    }

    const[diffColor,setDiffColor]=useState('')
    useEffect(() => {debugger
      let room = props.pick[0].roomColor;
      room = room.slice(1,room.length-1)
        let r = parseInt(room.substr(0,2),16);
        let g = parseInt(room.substr(2,2),16);
        let b = parseInt(room.substr(4,2),16);
        let yiq = ((r*299)+(g*587)+(b*114))/1000;
        return (yiq >= 128) ? setDiffColor('black') : setDiffColor('white');
    },[])

  return (
    <div>
        <div id='RoomPDiv' style={{backgroundColor:props.pick[0].roomColor, color:diffColor}}>
           <div id='divH'>
              <h1>Smart <br></br> House</h1>
           </div>
           <div id='divH2'>
              <Link to='/rooms'><p className='closeRoom' style={{color:diffColor}}>Exit room</p></Link>
              <p>Room name: <span>{props.pick[0].roomName}</span></p>
              <p>Room type: <span>{props.pick[0].roomType}</span></p>
           </div>
        </div>


        <div id='midDiv'>
            <div id='deviceDiv'>
              <h1>{props.d.roomDivices.map((val,i)=>{return <RoomDetails i={i} color={props.color} bg={props.bg} name={val.name} state={val.state} d={props.d}/>})}</h1>
            </div>
            <div id='RPBtn'>
            <button className="button" onClick={()=>{setFlag(!flag)}}>add device</button>
            </div>
        </div>
        

        <div style={{textAlign:'center'}}>{showAddDiv()}</div>
    </div>
  )
}



// #backG { 
//   background: #000; 
// }


    // <p id="col_UP" style="font-size: 15px; font-weight: bold;"> </p> 
    // <button onclick="col_Fun()" style="padding:10px;">
    //     click here 
    // </button> 

    // <div id="backG">Welcome to Techsolutionstuff</div> 


// var el_up = document.getElementById('col_UP'); 
// var rgbValue = [255, 0, 0]; 
 

// function setColor() { 
//     rgbValue[0] = Math.round(Math.random() * 255); 
//     rgbValue[1] = Math.round(Math.random() * 255); 
//     rgbValue[2] = Math.round(Math.random() * 255); 
//     var color = Math.round(((parseInt(rgbValue[0]) * 299) + 
//         (parseInt(rgbValue[1]) * 587) + 
//         (parseInt(rgbValue[2]) * 114)) / 1000); 
//     var textColor = (color > 125) ? 'black' : 'white'; 
//     var backColor =  
//         'rgb(' + rgbValue[0] + ', ' + rgbValue[1] + ', ' 
//      + rgbValue[2] + ')'; 
      
//     $('#backG').css('color', textColor); 
//     $('#backG').css('background-color', backColor); 
// } 

// function col_Fun() { 
//     setColor(); 
// }