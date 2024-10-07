import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

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
  try {
    /*     const { date, weather, visibility, comment } = req.body
    const newDiaryEntry = diaryServices.addDiary({ date, weather, visibility, comment }) */
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message)
    } else {
      res.status(400).send('An unknown error occurred')
    }
  }
})

export default router
