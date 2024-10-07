import express from 'express'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getNonSensitiveEntries())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  if (diary != null) {
    res.send(diary)
  } else {
    res.sendStatus(404)
  }
})

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body
  const newDiaryEntry = diaryServices.addDiary({ date, weather, visibility, comment })
  res.json(newDiaryEntry)
})

export default router
