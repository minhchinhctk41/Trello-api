import express from 'express'

const app = express()

const hostname ='localhost'
const port = 8000

app.get('/', (req, res) => {
  res.end('<h1>Hello world!</h1><hr/>')
})

app.listen(port, hostname, () => {
  console.log(`Server is running in ${hostname}:${port}`)
})