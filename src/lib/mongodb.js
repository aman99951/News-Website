import { MongoClient } from 'mongodb';

const uri = 'mongodb://127.0.0.1:27017';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

let client;
let clientPromise;

if (!client) {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

async function connectToDatabase() {
  await clientPromise;
  return client.db('newsWebsite');
}

export { connectToDatabase };
