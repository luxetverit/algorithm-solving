const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().split(' ')

let month = parseInt(input[0])
let day = parseInt(input[1])
const dayofweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

console.log(dayofweek[new Date('2007-' + month + '-' + day).getDay()])
