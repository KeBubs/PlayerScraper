import express from 'express'
import scraper from './src/functions/scraper.js'
import 'dotenv/config'
import cors from 'cors'

const app = express()
const port = process.env.VITE_PORT

app.use(cors())

app.get('/', async (req, res) => {
    console.log('request received')
    const data = await scraper()
    res.json(data)
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
})