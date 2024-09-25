import { useState } from 'react'
import './App.css'
import catClosed from './assets/catClosed.png';
import catOpen from './assets/catOpen.png';


function App() {
  
  const cambiarBoca = () => {
    setBocaAbierta(!bocaAbierta)
  }

  const [cuenta, setCuenta] = useState(0) //la cuenta empieza en cero
  const [bocaAbierta, setBocaAbierta] = useState(false)

  return (
    <main className='mainComponent'>
      <h1 className='mainTitle'>POPCAT</h1>
      <img 
        src={bocaAbierta ? catOpen : catClosed}  
        alt="Gato animado" 
        onClick={cambiarBoca} 
        style={{ cursor: 'pointer', width: '200px' }}
        className='mainImg'  
      />
      <button onClick={() => setCuenta(cuenta + 1)} className='mainButton'>Clicks: {cuenta} </button>
    </main>
  )
}

export default App
