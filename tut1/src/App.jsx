import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
const App = () => {

  const boxRef = useRef()
  

  // useGSAP(()=>{
  //   gsap.from(boxRef.current,{
  //     rotate:360,
  //     delay:1,
  //     duration:1
  //   })
  // })
  useGSAP(()=>{
    gsap.from(".box",{
      rotate:360,
      opacity:0,
      scale:0.5,
      delay:1,
      duration:1
    })
  },{scope:".kuch"})


  return (
    <main>
      {/* <div ref={gsapRef} className="box"></div> */}

      {/* <div className="container">
        <div className="circle"></div>
        <div ref={boxRef} className="box"></div>
        
      </div>
      <div className="kuch">
          <div className="circle"></div>
          <div className="box"></div>
      </div> */}

      <button>Move</button>
    </main>
  )
}

export default App
