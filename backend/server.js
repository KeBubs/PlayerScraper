import express from 'express'
import scraper from './scraper.js'
import 'dotenv/config'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', async (req, res) => {
    const team = decodeURIComponent(req.query.team)
    console.log('request received for ', team)
    const data = await scraper(team)
    
    res.json(data)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

