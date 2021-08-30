import express from 'express'
import { connectDB } from '*/config/mongodb' // * = './src'
import { env } from '*/config/environtment'

const app = express()


connectDB().catch(console.log)

app.get('/', (req, res) => {
  res.end('<h1>Hello world!</h1><hr/>')
})

app.listen(env.PORT, env.HOSt, () => {
  console.log(`Server is running in ${env.HOSt}:${env.PORT}`)
})
