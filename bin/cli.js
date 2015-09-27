'use strict'

var exec = require('child_process').exec
var input = process.argv.slice(2)

if (!(input[0].includes('github.com'))) {
  input[0] = 'https://github.com/' + input[0]
}

var getName = function () {
  var name = input[0].replace(/.git/gi, '').split('/')
  return name[name.length - 1]
}

var folder = input[1] || getName()

var cmd = [
  'git clone ' + input.join(' '),
  'cd ' + folder,
  'npm install'
]

exec(cmd.join(' && '), {}, function (err) {
  if (err) return console.error(err)
  console.log('\u270C done \u270C')
})
