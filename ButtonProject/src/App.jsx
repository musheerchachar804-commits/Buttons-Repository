 
import { useState } from 'react'
import './App.css'

function App() {
const[counter,setcounter]=useState(0)

  return (
    
  <div className='main'>
    <div className='child-box'>{counter}  </div>
    <div className="btns">
      <button className='btn' onClick={function(){
        setcounter(counter+1)
      }}>+</button>
      <button className='btn' onClick={function(){
        setcounter(counter-1)
      }}  >-</button>
      <button className='btn' onClick={function(){
        setcounter(0)
      }}>Reset</button>
    
  </div>
  </div>
  )
}

export default App
