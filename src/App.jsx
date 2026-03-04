import './App.css'
import axios from 'axios'
import {useState, useEffect} from 'react'

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

    </>
  )
}

export default App
