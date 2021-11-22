const GMT = require('node-gmt')
const gmtHours = 'GMT-05:00'

const addCero = (num) => {
  return num < 10 ? `0${num}` : num
}

const getDateNow = (dateGetThem) => {
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

console.log(getDateNow())
module.exports = {
  getDateNow
}
