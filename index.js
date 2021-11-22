const GMT = require('node-gmt')

/**
 * Retrieve a 0 before the first digit when the number is less than 10
* @param {number} number
* @returns {String} string
*/
const addCero = (num) => {
  return num < 10 ? `0${num}` : num
}

const gmtChecker = (gmt) => {
  const array = [
    'GMT+00:00',
    'GMT-00:00',
    'GMT+01:00',
    'GMT+02:00',
    'GMT+02:00',
    'GMT+03:00',
    'GMT+03:30',
    'GMT+04:00',
    'GMT+05:00',
    'GMT+05:30',
    'GMT+06:00',
    'GMT+07:00',
    'GMT+08:00',
    'GMT+09:00',
    'GMT+09:30',
    'GMT+10:00',
    'GMT+11:00',
    'GMT+12:00',
    'GMT-11:00',
    'GMT-10:00',
    'GMT-09:00',
    'GMT-08:00',
    'GMT-07:00',
    'GMT-07:00',
    'GMT-06:00',
    'GMT-05:00',
    'GMT-05:00',
    'GMT-04:00',
    'GMT-03:30',
    'GMT-03:00',
    'GMT-03:00',
    'GMT-01:00'
  ]
  if (gmt === undefined) return true
  return array.includes(gmt)
}

/**
 * Retrieve the date as format yyyy/mm/dd hh:mm:ss
* @param {timestamp} date
* @param {gmt hours} string
* @returns {String} string
*/
module.exports = (dateGetThem, gmtHours) => {
  if (dateGetThem !== undefined || dateGetThem) {
    if (typeof dateGetThem === 'number') return -1
    const valid = (new Date(dateGetThem)).getTime() > 0;
    if (!valid) return -1
  }

  if (!gmtChecker(gmtHours)) return -1
  gmtHours = !gmtHours ? 'GMT+00:00' : gmtHours

  const gmt = new GMT(gmtHours)
  let currentDate = (!dateGetThem) ? new Date() : new Date(dateGetThem)
  currentDate = gmt.relativeDate(currentDate)
  const date = currentDate.getDate()
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()
  const hour = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  const seconds = currentDate.getSeconds()

  const yearMonthDay = `${year}/${addCero(month + 1)}/${addCero(date)} ${addCero(hour)}:${addCero(minutes)}:${addCero(seconds)}`
  return yearMonthDay
}

