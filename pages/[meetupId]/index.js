import {MongoClient, ObjectId} from 'mongodb'
import MeetupDetail from './../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
    console.log(`props`, props)
    return <MeetupDetail image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description} />
    // return <h1>Message</h1>
    // return <MeetupDetail image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/moscow-russia-st-basil-cathedral-royalty-free-image-1594133515.jpg?crop=1xw:1xh;center,top&resize=768:*' title='First Meetup' address='address' description='description' />
}

export async function getStaticPaths(){
    const client = await MongoClient.connect(process.env.ATLAS_URI)
    const db = client.db()

    const meetupsCollections = db.collection('meetups');

    const meetups = await meetupsCollections.find({}, {_id: 1}).toArray();
    client.close()
    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() }
        }))
    }
}

export async function getStaticProps(context) {
    // fetch data for single meetup
    const meetupId = context.params.meetupId;
    console.log(`meetupId`, meetupId)

    const client = await MongoClient.connect(process.env.ATLAS_URI)
    const db = client.db()

    const meetupsCollections = db.collection('meetups');

    const selectedMeetup = await meetupsCollections.findOne({ _id: ObjectId(meetupId) });
    client.close()

    console.log(`selectedMeetup`, selectedMeetup)
    
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            },
        }
    }
}

export default MeetupDetails;