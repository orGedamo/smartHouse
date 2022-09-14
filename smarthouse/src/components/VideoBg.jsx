import React from 'react'
import './Main.css'
import myVid from '../images/smartV.mp4'
import { Link } from 'react-router-dom'

export default function VideoBg() {

  // function myFunction() {
  //   let video = document.getElementById("myVideo");
  //   let btn = document.getElementById("myBtn");
  //   if (video.paused) {
  //     video.play();
  //     btn.innerHTML = "Pause";
  //   } else {
  //     video.pause();
  //     btn.innerHTML = "Play";
  //   }
  // }

  return (
    <div>
      <video loop autoPlay muted id="myVideo">
         <source src={myVid} type="video/mp4"/>Your browser does not support HTML5 video.
      </video> 
      
      <div className="content">
        <h1 className='videoH1'>Keemple Smart Home</h1>
        <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>
        <Link to='/singin'><button id="myBtn">START!</button></Link>
      </div>
    </div>
  )
}
