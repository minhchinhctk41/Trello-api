import { MongoClient } from 'mongodb'
import { env } from '*/config/environtment' // * = './src'


export const connectDB = async () => {
  const client = new MongoClient(env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  try {

    // Connect the client to the server
    await client.connect()
    console.log('Connect successfully to server!')

    // List database
    await listDatabases(client)


  } finally {
    // Close

    await client.close()
  }
}
const listDatabases = async (client) => {
  const databasesList = await client.db().admin().listDatabases()
  console.log(databasesList)
  console.log('Your database')
  databasesList.databases.forEach(db => console.log(` -${db.name}`))
}