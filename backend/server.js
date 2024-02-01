import express from 'express'
import scraper from './scraper.js'
import 'dotenv/config'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())

app.get('/', async (req, res) => {
    console.log('request received for ', req.headers.team)
    const team = req.headers.team
    const data = await scraper(team)
    
    res.json(data)
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})
