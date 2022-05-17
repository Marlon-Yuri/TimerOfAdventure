import React, { useState } from "react";

export default function App(){

  const [number, setNumber] = useState(0)

var add =() =>{
    const myCronometro = setInterval(() =>{
      setNumber(prevState => prevState +1)
    }, 1000)

const zerar =()=>{
    clearInterval(myCronometro) 
 }

  return(
    <>
    <h1>{number}</h1>
    <button onClick={add}>INCREASE</button>
    <button >STOP</button>
    <button onClick={zerar}>zerar</button>
    </>
  )
}
}
