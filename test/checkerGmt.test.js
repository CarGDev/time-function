const gmthours = require('../index')

describe('hours format', () => {
  it ('get current hours format', () => {
    const result = gmthours()
    expect(result).not.toBeNull()
  })

  it ('get hours by timestamp', () => {
    const dateNow = new Date()
    expect(gmthours(dateNow)).not.toBeNull()
  })

  it ('get hours by timestamp specifically', () => {
    const dateNow = new Date(1995, 11, 17)
    expect(gmthours(dateNow)).toBe('1995/12/17 06:00:00')
  })

  it ('get hours by time and gmt specifically', () => {
    const dateNow = new Date(1995, 11, 17)
    const gmt = 'GMT-05:00'
    expect(gmthours(dateNow, gmt)).toBe('1995/12/17 01:00:00')
  })
})

describe('check bad request', () => {
  it ('string is not allowed', () => {
    const stringWord = 'string word'
    expect(gmthours(stringWord)).toBe(-1)
  })

  it ('number is not allowed', () => {
    const numberWord = 10
    expect(gmthours(numberWord)).toBe(-1)
  })

  it ('gmt allowed in GMT format', () => {
    const dateNow = new Date(1995, 11, 17)
    const gmt = 'esto es un string'
    expect(gmthours(dateNow, gmt)).toBe(-1)
  })

  it ('gmt allowed in GMT format', () => {
    const dateNow = new Date(1995, 11, 17)
    const gmt = 10
    expect(gmthours(dateNow, gmt)).toBe(-1)
  })
})
