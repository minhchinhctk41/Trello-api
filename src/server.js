import express from 'express'
import { connectDB } from '*/config/mongodb'
import { env } from '*/config/environtment'

connectDB()
  .then(() => console.log('Connectec successfully to databasse server!'))
  .then(() => bootServer())
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

const bootServer = () => {
  const app = express()

  app.get('/', async (req, res) => {

    res.end('<h1>Hello world!</h1><hr/>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Server is running in ${env.APP_HOST}:${env.APP_PORT}`)
  })
}
