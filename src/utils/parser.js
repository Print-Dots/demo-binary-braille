const braille = require('braille')

function parserToBraille(text) {
  let newText = braille.toBraille(text)
  return newText
}

module.exports = {
  parserToBraille
}