import './App.css'
import { useState } from 'react'

function App() {

  const [active, setActive] = useState(false)

  return (
    <div id="Page">

      <div 
        id="cube" 
        className={active ? "active" : ""} 
        onClick={() => setActive(!active)}
      >
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>

     <div id="message">
  <div>Eid Mubarak</div>
  <div style={{ fontSize: "20px", marginTop: "10px" }}>
    Name: M.Abdullah.Khan
  </div>
  <div style={{ fontSize: "20px" }}>
    Seat No: B23110006078
  </div>
</div>

    </div>
  )
}

export default App