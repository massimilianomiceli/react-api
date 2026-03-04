import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from 'react'
import Card from './components/Card'

function App() {

  const [attori, setAttori] = useState([])

  function fetchAttori(){
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((response) => {
        setAttori(response.data)
        console.log(response.data)
      })
  }

  useEffect(fetchAttori, [])

  return (
    <>
    <main>
      <h1>React API</h1>
      <section className="container">
        <div className="row">
          {attori.map(attore => (
            <Card key={attore.id} attore={attore}/>
          ))}            
        </div>
      </section>
    </main>
    </>
  )
}

export default App
