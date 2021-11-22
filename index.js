const GMT = require('node-gmt')

/**
 * Retrieve a 0 before the first digit when the number is less than 10
* @param {number} number
* @returns {String} string
*/
const addCero = (num) => {
  return num < 10 ? `0${num}` : num
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
  
  gmtHours = !gmtHours ? 'GMT-00:00' : gmtHours
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
