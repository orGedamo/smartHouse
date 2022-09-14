import React from 'react'



export default function Weather() {

(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);
  js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);
  }})(document,'script','weatherwidget-io-js');

        
  
  return (
    <div style={{position: 'fixed',bottom: '0',width:'100%'}}>
        <a className="weatherwidget-io" href="https://forecast7.com/en/32d0934d81/tel-aviv-district/" 
        data-label_1="TEL AVIV DISTRICT" data-label_2="WEATHER" data-icons="Climacons Animated" 
        data-theme="marine" >TEL AVIV DISTRICT WEATHER</a>
    </div>
  )
}
