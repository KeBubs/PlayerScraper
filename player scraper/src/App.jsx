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
  // Can evetually change the teams to be dynamically rendered
  const [teams, setTeams] = useState(TeamInfo)
  const [home, setHome] = useState(true)
  const [selectedTeam, setSelectedTeam] = useState(null)
  const [loading, setLoading] = useState(false)

  // Function which will go and fetch the players from the endpoint.
  async function handleClick(value){
    
    if (value == 'Home'){
      setHome(true)
    } else {
      setLoading(true)
      setSelectedTeam(value)

    const response = await fetch(combined, {
      method: "GET",
      headers: {"team": value}
      
    })
    const data = await response.json(response)
    setPlayers(data)
    setHome(false)
    setLoading(false)
    }
    
  }

  return (
    <div>
      <h3>Player Scraper: Oakbourne Championship League</h3>
      {loading ? (<p>Loading...</p>) : (home ? <Teams teams={teams} function={handleClick}/> : <Players selectedTeam={selectedTeam} players={players} function={handleClick}/>)}
      
    </div>
  )
}

export default App
