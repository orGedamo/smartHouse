import React from 'react'
import './Main.css'

export default function Popup() {

  const pop=()=>{
    let pm = document.getElementById("popMsg");
    let btn = document.getElementById("popBtn");
    let span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
     pm.style.display = "block";
    }
    span.onclick = function() {
      pm.style.display = "none";
    }
    window.onclick = function(event) {
    if (event.target === pm) {
      pm.style.display = "none";
    }
    }
  }


  return (
    <div style={{marginTop:'25px'}}>
      <button onClick={pop} id="popBtn">Who are we?</button>
      <div id="popMsg" className="pop">
        <div className="pop-content">
          <span className="close">&times;</span>
          <h1>Welcome keemple smart home</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus cum doloribus illum. Ad blanditiis repellat quisquam, at placeat a consequuntur? Eligendi dolore fugit eaque voluptate vitae consequatur illo vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus cum doloribus illum. Ad blanditiis repellat quisquam, at placeat a consequuntur? Eligendi dolore fugit eaque voluptate vitae consequatur illo vel!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus cum doloribus illum. Ad blanditiis repellat quisquam, at placeat a consequuntur? Eligendi dolore fugit eaque voluptate vitae consequatur illo vel!</p>
        </div>
      </div>
    </div>
  )
}
