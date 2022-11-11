# Intro

This is a little package that makes it easy to prompt for user input in a Node program. There are better tools out there, but I just wanted something simple and easy.

# Installation

```bash
npm install --save @jrc03c/prompt
```

# Usage

The `prompt` function can be used in `Promise` mode or callback mode:

```js
const prompt = require("@jrc03c/prompt")

// Promise mode
prompt("Hey! What's your name?").then(name => {
  console.log(`Nice to meet you, ${name}!`)
})

// Callback mode
prompt("Hey! What's your name?", name => {
  console.log(`Nice to meet you, ${name}!`)
})
```
