import * as express from 'express'
export const app = express()
app.get('/', (req, res) => res.send('Hello BC'))
app.get('/cheese', (req, res) => res.send('Cheese & bread'))
console.log('reloading...')

const incompleteWork = 123
