import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device'
import Watch from './components/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Device name='uphone' price='12000'></Device>
        <Device name='Samsung' price='125000'></Device>
        <Watch></Watch>
    </div>
  )
}

export default App
