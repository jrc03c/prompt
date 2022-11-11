const process = require("process")
const readline = require("readline")

function prompt(text, callback) {
  return new Promise((resolve, reject) => {
    try {
      if (!text.match(/\s$/g)) {
        text += " "
      }

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      })

      rl.question(text, response => {
        if (callback) callback(response)
        resolve(response)
        rl.close()
      })
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = prompt
