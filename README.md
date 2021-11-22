# Convert time GMT

convert the timestamp in a format yyyy/mm/dd hh:mm:ss with GMT as default

## Installing

```bash
npm i convert-time-gmt --save
```

## Usage

On the main file:

```js
const gmtConversion = require('convert-time-gmt')

gmtConversion() // 2021/22/11 12:00:00

gmtConversion(new Date()) // 2021/22/11 12:00:00

gmtConversion(new Date(), 'GMT-05:00') // 2021/22/11 07:00:00
```
