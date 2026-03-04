import './App.css'
import axios from 'axios'

function App() {

  const [attori, setAttori] = useState([])

  function fetchAttori(){
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => setAttori(res.data))
      console.log(res.data)
  }

  return (
    <>

    </>
  )
}

export default App
