const braille = require('braille')
const binBraille = require('bin-braille-parser')

function parserToBraille(text) {
  let newText = braille.toBraille(text)
  return newText
}

function parserToBinBraille(text) {
  return binBraille.parserTextToBinBraille(text)
}

module.exports = {
  parserToBraille,
  parserToBinBraille
}