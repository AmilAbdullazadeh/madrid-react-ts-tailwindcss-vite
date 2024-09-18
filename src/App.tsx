import { useState } from 'react'
import Display from './components/Display/Display'
import MenuList from './components/MenuList/MenuList'
import './global.css'

function App() {
  const [level, setLevel] = useState<string>('Medium')

  function changeLevel(level: string) {
    setLevel(level)
  }

  return (
      <div className='container'>
          <MenuList activeLevel={level} handleClick={changeLevel} />
          <Display activeLevel={level} />
      </div>
  )
}

export default App
