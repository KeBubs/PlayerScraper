import { useState } from 'react'
import Teams from './components/Teams'
import Players from './components/Players'
import Data from './data/samplePlayers.json'
import TeamInfo from './data/sampleTeams.json'

const url = import.meta.env.VITE_URL
const port = import.meta.env.VITE_PORT
const combined = url + port

import './App.css'

function App() {
  const [players, setPlayers] = useState(false)
  const [teams, setTeams] = useState(TeamInfo)
  const [loading, setLoading] = useState(true)

  // Function which will go and fetch the players from the endpoint.
  async function handleClick(team){
    console.log(team)

    const response = await fetch(combined, {
      method: "GET",
      
    })
    const data = await response.json(response)
    console.log(data)
  
    if (players == true){
      setPlayers(false)
    } else {
      setPlayers(true)
    }
    
  }

  return (
    <div>
      <h3>Player Scraper: Oakbourne Championship League</h3>
      {players == false ? (<Teams teams={teams} function={handleClick}/>) : (<Players players={Data} function={handleClick}/>)}
    </div>
  )
}

export default App
