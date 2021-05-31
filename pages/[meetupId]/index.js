import {Fragment} from 'react'
import Head from 'next/head'
import {MongoClient, ObjectId} from 'mongodb'
import MeetupDetail from './../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
    console.log(`props`, props)
    return (
        <Fragment>
                <Head>
                    <title>{props.meetupData.title}</title>
                    <meta
                        name='description'
                        content={props.meetupData.description}/>
                </Head>
                <MeetupDetail image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description} />
            </Fragment>
    )
}

export async function getStaticPaths(){
    const client = await MongoClient.connect(process.env.ATLAS_URI)
    const db = client.db()

    const meetupsCollections = db.collection('meetups');

    const meetups = await meetupsCollections.find({}, {_id: 1}).toArray();
    client.close()
    return {
        // setting fallback to `'blocking'` or `true` lets the app know that the list isn't exhaustive
        // therefore pages will be pregenerated when needed
        // true immediately returns an empty page, then pull down the dynamic content once it's done
        // wit blocking the user will not see anything until the pages is pregenerated, then the finished page will be served
        fallback: 'blocking',
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() }
        }))
    }
}

export async function getStaticProps(context) {
    // fetch data for single meetup
    const meetupId = context.params.meetupId;
    // console.log(`meetupId`, meetupId)

    const client = await MongoClient.connect(process.env.ATLAS_URI)
    const db = client.db()

    const meetupsCollections = db.collection('meetups');

    const selectedMeetup = await meetupsCollections.findOne({ _id: ObjectId(meetupId) });
    client.close()

    // console.log(`selectedMeetup`, selectedMeetup)
    
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