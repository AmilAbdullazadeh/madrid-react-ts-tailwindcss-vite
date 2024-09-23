import Deatils from './components/Details/Details'
import List from './components/List/List'
import './global.css'
import Header from './layouts/Header/Header'

function App() {

  return (
      <div className='p-4'>
        <Header />

        <div className='m-4 border border-solid !rounded-lg h-96 p-4'>

          {/* Deatils */}
          <Deatils />

          {/* List */}
          <List />
        </div>
      </div>
  )
}

export default App
