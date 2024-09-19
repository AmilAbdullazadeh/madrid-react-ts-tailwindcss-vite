import { useState } from 'react'
import Card from './components/Card/Card'
import './global.css'
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';

interface UserInfo {
  name: string;
  age: number;
  imageurl: string;
}

function App() {

  return (
      <div className='container'>
        <PasswordGenerator length={20} />
      </div>
  )
}

export default App
