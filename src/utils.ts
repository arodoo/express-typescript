import { NewDiaryEntry } from './types'
import { Weather, Visibility } from './enums'

const parseComment = (CommentFromRequest: any): string => {
  if (!isString(CommentFromRequest)) {
    throw new Error('Incorrect or missing comment: ')
  }

  return CommentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }

  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather: ')
  }

  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility: ')
  }

  return visibilityFromRequest
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
