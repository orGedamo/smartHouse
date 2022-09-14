import './App.css'
import {useState,useRef} from 'react';
import {Route,Routes, HashRouter} from 'react-router-dom'
import HomePage from './components/HomePage';
import AddRoom from './components/AddRoom';
import RoomPage from './components/RoomPage';
// import Weather from './components/Weather';
import VideoBg from './components/VideoBg';
import SingIn from './components/SingIn';

function App() {

  const[rooms,setRooms]=useState([]);
  const addNewRoom=(t,n,c)=>{
    // debugger;
    let temp={
      roomType: t,
      roomName: n,
      roomColor: c,
      roomDivices: []
    }
    setRooms([...rooms,temp]);
  }

  
  const[pick,setPick]=useState([]);
  const pickedRoom=(index)=>{
    // debugger;
    setPick([rooms[index]])
    // console.log(pick[0]);
    // console.log(pick[0].roomDivices);
  }

  const[diffColor,setDiffColor]=useState('')
  // const changeTextColor=()=>{
  //   let textColor=(parseInt(pick[0].roomColor, 16) > 0xffffff/2) ? 'black':'white';
  //   setDiffColor(textColor)
  // }
  useRef(() => {debugger
    let room = pick[0].roomColor;
    let textColor=(parseInt(room, 16) > 0xffffff/2) ? 'black':'white';
    setDiffColor(textColor)
  },[pick])
  

  return (
    <div className="App">
      <HashRouter>
         <Routes>
           <Route path='/' element={<VideoBg/>}/>
           <Route path='/singin' element={<SingIn/>}/>
           <Route path='rooms' element={<HomePage roomsArr={rooms} pick={pickedRoom} pickArr={pick} />}/>
           <Route path='/addRoom' element={<AddRoom add={addNewRoom} roomsArr={rooms} />}/>
           <Route path='/roomPage' element={<RoomPage pick={pick} d={pick[0]} textColor={diffColor}/>}/>
         </Routes>
        {/* <Weather/> */}
      </HashRouter>
    </div>
  );
}

export default App;

