import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  // forçando o typescript não conflitar com a sintaxe dos objetos do js
  client: null as MongoClient,

  async connect(url: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect(): Promise<void> {
    this.client.close()
  },

  getCollection(name: string): Collection {
    return this.client.db().collection(name)
  }
}
