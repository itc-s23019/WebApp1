const lines = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .split('\n')
const string = lines[0]

console.log(string)
