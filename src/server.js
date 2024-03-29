import express from 'express'
import cors from 'cors'
import { corsOptions } from '*/config/cors'
import { connectDB } from '*/config/mongodb'
// import { env } from '*/config/environtment'
import { apiV1 } from '*/routes/v1'

connectDB()
  .then(() => console.log('Connectec successfully to databasse server!'))
  .then(() => bootServer())
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

const bootServer = () => {
  const app = express()

  app.use(cors(corsOptions))

  // Enable req.body data
  app.use(express.json())

  // Use APIs v1
  app.use('/v1', apiV1)

  // app.listen(env.APP_PORT, env.APP_HOST, () => {
  //   console.log(`Server is running in ${env.APP_HOST}:${env.APP_PORT}`)
  // })

  // Support heroku deploy
  app.listen(process.env.PORT, () => {
    console.log(`Server is running in :${process.env.PORT}`)
  })
}
