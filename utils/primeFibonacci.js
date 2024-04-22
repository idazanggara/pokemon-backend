let renameCounters = {}

function nextFibonacci(pokemonId) {
    if (!renameCounters[pokemonId]) {
        renameCounters[pokemonId] = { current: 0, prev: 0, count: 0 }
    }

    let fib = renameCounters[pokemonId]
    let next

    if (fib.current === 0 && fib.prev === 0) {
        next = 1
    } else {
        next = fib.current + fib.prev
    }

    fib.prev = fib.current
    fib.current = next
    return fib.prev
}

function getBaseName(pokemonId) {
    return renameCounters[pokemonId] ? renameCounters[pokemonId].baseName : null
}

function setBaseName(pokemonId, baseName) {
    if (!renameCounters[pokemonId]) {
        renameCounters[pokemonId] = { current: 0, prev: 0, count: 0, baseName: baseName }
    }
}

function resetFibonacciSequence(pokemonId) {
    if (renameCounters[pokemonId]) {
        renameCounters[pokemonId].current = 1
        renameCounters[pokemonId].prev = 0
        renameCounters[pokemonId].count = 0
        return true
    }
    return false
}


function isPrime(num) {
    if (num <= 1) return false
    if (num <= 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false
    }
    return true
}


module.exports = { isPrime, nextFibonacci, resetFibonacciSequence, getBaseName, setBaseName }
