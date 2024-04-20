const express = require('express')
const router = express.Router()
const { isPrime, nextFibonacci, resetFibonacciSequence, getBaseName, setBaseName } = require('../utils/primeFibonacci')

let caughtPokemons = []


router.get('/', (req, res) => {
  res.send("Sukses")
})

router.get('/my-pokemon', (req, res) => {
  res.status(200).json(caughtPokemons)
})

// router.post('/catch', (req, res) => {
//   const success = Math.random() < 0.5
//   res.json({ success })
// })

router.post('/catch', (req, res) => {
  const pokemon = req.body
  if (Math.random() < 0.5) {
    // caughtPokemons.push(pokemon)
    // console.log(caughtPokemons, "===")
    res.json({ success: true, pokemon })
  } else {
    res.json({ success: false })
  }
})

router.post('/release', (req, res) => {
  const num = Math.floor(Math.random() * 100)
  // const num = 2
  const prime = isPrime(num)
  // console.log(num, " == ", prime, "---- Prime")
  res.json({ success: prime })
})

router.post('/rename', (req, res) => {
  const { id, name } = req.body
  if (!getBaseName(id)) {
    setBaseName(id, name)
  }

  const fibNumber = nextFibonacci(id)
  const baseName = getBaseName(id)
  const newName = `${baseName}-${fibNumber}`
  res.json({ newName })
})

router.post('/reset-fibonacci', (req, res) => {
  // console.log("testing reset-fibonacci")
  const { id } = req.body
  if (resetFibonacciSequence(id)) {
    res.json({ success: true, message: 'Fibonacci sequence reset successfully.' })
  } else {
    res.status(404).json({ success: false, message: 'Pokemon not found.' })
  }
})


module.exports = router
