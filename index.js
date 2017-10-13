#!/usr/bin/env node

const scpt = require('./scpt')

async function main(argv) {  
  const {application, args: [key]} = require('commander')
    .version(require('./package').version)
    .option('-a, --application [application]', null)
    .parse(argv)    

  if (application)
    await scpt `tell application "${application}" to activate`

  const code = keyCode(key)
  await scpt `tell application "System Events" to key code ${code}`
}

function keyCode(description) {
  return +description
}

if (module === require.main)
  main(process.argv)