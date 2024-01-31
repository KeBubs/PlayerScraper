import { useState } from 'react'

const url = import.meta.env.VITE_URL
const port = import.meta.env.VITE_PORT
const combined = url + port

import './App.css'

function App() {
  const [players, setPlayers] = useState(null)
  const [loading, setLoading] = useState(true)

  // Function which will go and fetch the players from the endpoint.
  async function handleClick(){
    const response = await fetch(combined, {
      method: "GET"
    })
    const data = await response.json(response)
    console.log(data)
    setLoading(false)
  }

  return (
    <>
      <p>Player finder for the Oakbourne Championship League</p>
      <button onClick={()=>{handleClick()}}>Click here to return the players</button>
    </>
  )
}

export default App
