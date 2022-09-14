import React,{useState} from 'react'
import './Main.css'

export default function RoomDetails(props) {

    const [flagC, setFlagC] = useState(props.d.roomDivices[props.i].state===true ? '#98FB98' : '#F08080');

    const onOff=()=>{debugger;
        if(props.d.roomDivices[props.i].state===true){
          setFlagC('#F08080');
          props.d.roomDivices[props.i].state=false;
        }
        else if(props.d.roomDivices[props.i].state===false){
          setFlagC('#98FB98');
          props.d.roomDivices[props.i].state=true;
        }
        console.log(props.d.roomDivices[props.i].state);
    }

       // #F08080  red
       // #98FB98  green

  return (
    <div>
        <div>
            <button id="dBtn" title='On' style={{backgroundColor: flagC}} onClick={onOff}>{props.name}</button>
        </div>
    </div>
  )
}



     // let b=document.getElementById('dBtn');
        // if(flagC==='#F08080'){
        // b.title='Off';
        // setFlagC('#98FB98');}
        // else if(flagC==='#98FB98'){
        // b.title='On'
        // setFlagC('#F08080'); }