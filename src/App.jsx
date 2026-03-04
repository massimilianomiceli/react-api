import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from 'react'
import Card from './components/Card'

function App() {

  const [attori, setAttori] = useState([])
  const [attrici, setAttrici] = useState([])

  function fetchAttori(){
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((response) => {
        setAttori(response.data)
        console.log(response.data)
      })
  }

  function fetchAttrici(){
  axios.get("https://lanciweb.github.io/demo/api/actresses/")
    .then((response) => {
      setAttrici(response.data)
      console.log(response.data)
    })
  }

  useEffect(fetchAttori, [])
  useEffect(fetchAttrici, [])

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
        <div className="row">
          <div className="col-6">
            <h2>Lista attori</h2>
            <ul>
                {attori.map((attore, index) => (
                    <li key={index} className="list-group-item">{attore.name}</li>
                ))}
            </ul>            
          </div>
          <div className="col-6">
            <h2>Lista attrici</h2>
            <ul>
                {attrici.map((attrice, index) => (
                    <li key={index} className="list-group-item">{attrice.name}</li>
                ))}
            </ul>            
          </div>
          <div className="col-6">
            <h2>Lista attori e attrici</h2>
            <ul>
                {[...attori, ...attrici].map((persona, index) => (
                    <li key={index} className="list-group-item">{persona.name}</li>
                ))}
            </ul>            
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
