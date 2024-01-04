import { useState } from 'react'
//import './App.css'
import CountButton1 from './components/CountButton1'
import CountButton2 from './components/CountButton2'
import Todos1 from './components/Todos1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountButton1 />
      <CountButton2 />
      <Todos1 />
    </>
  )
}

export default App
