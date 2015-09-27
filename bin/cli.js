'use strict'

var exec = require('child_process').exec
var input = process.argv.slice(2)

var cmd = [
  'git clone ' + input.join(' '),
  'cd ' + input[1],
  'npm install'
]

exec(cmd.join(' && '), {}, function(err){
  if(err) return console.error(err)
  console.log('\u270C done \u270C')
})
