import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='heading'>React Quation</h2>
     <Accordion/>
    </>
  )
}

export default App
