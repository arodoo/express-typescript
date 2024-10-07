import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // midleware wich transform the body of the request in json

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Someone pinged me')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})
