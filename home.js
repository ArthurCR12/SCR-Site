'use strict'

document.getElementById('home').addEventListener('click', () => {
    document.getElementById('a-home').classList.remove('hidden')
    document.getElementById('a-contato').classList.add('hidden')
})
document.getElementById('contato').addEventListener('click', () => {
    document.getElementById('a-home').classList.add('hidden')
    document.getElementById('a-contato').classList.remove('hidden')
})