import React, { useState } from 'react'

function PAH() {
   const [trans,settrans]=useState("Kaioken");
   function Toggle()
   {
       settrans((pre=>(pre==="Kaioken"? "SuperSaiyan" :"Kaioken")));
   }
  return (
    <div>
        <h1>Current Transformation: {trans}</h1>
        <button onClick={Toggle}>Click</button>
    </div>
  )
}

export default PAH
