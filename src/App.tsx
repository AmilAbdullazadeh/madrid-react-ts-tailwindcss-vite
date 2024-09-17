import './App.css'
import Card from "./components/Card/Card";

function App() {
  return (
      <div className='d-flex'>
        <Card 
          bgColor={5} 
          textColor='white'
          imageUrl='https://picsum.photos/id/237/200/300'
          description="test"
        />

        <Card 
          bgColor='blue' 
          textColor='red'
          imageUrl='https://picsum.photos/id/238/200/300'
          description="test 2"
          />
      </div>
  )
}

export default App
