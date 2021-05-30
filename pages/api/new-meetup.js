import {MongoClient} from 'mongodb'

function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const {title, image, address, description} = data;
        console.log(`data`, data)

        console.log(`process.env.ATLAS_URI`, process.env.ATLAS_URI)
        const client = await MongoClient.connect(process.env.ATLAS_URI)
        const db = client.db()

        const meetupsCollections = db.collection('meetups');

       const result = await meetupsCollections.insertOne(data)

       console.log(`result`, result)
       client.close()

       res.status(201).json({message: 'Meetup inserted'})
    }
}

export default handler