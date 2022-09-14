import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Main.css'
// import {img} from '../../src/sing'

export default function SingIn() {

  const nev=useNavigate('');
    const[user,setUser]=useState('');
    const[password,setPassword]=useState('');

    const valid=()=>{
        if(user!=='gedamo' && password!=='1234567'){
            alert('look in the placeholder')
        }
        else{
          nev('/rooms')
        }
        
    }

  return (
    <div className='singInContainer'>
      <div className='singInImg'>

      </div>
      <div className='singInDiv'>
        <h1 style={{fontWeight:'lighter',color:'white'}}>Keemple</h1>
        <input className='singInInput' type='text' placeholder='user: gedamo' onChange={(e)=>{setUser(e.target.value)}}></input><br></br>
        <input className='singInInput' type='password' placeholder='password: 1234567' onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
        <button className='button' onClick={valid}>Enter</button>
      </div>   
    </div>
  )
}
