import {MongoClient} from 'mongodb'
import MeetupList from './../components/meetups/MeetupList'

function HomePage(props) {
    return <MeetupList meetups={props.meetups}/>
        }

// runs on the server on deployment/every incoming request
// not as fast as getStaticProps
// export async function getServerSideProps(context){
//     // console.log(`context`, context)
//     const req = context.req;
//     const res = context.res;
//     // fetch data from API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }
// runs during build process
// faster
// can be cached and distributed by CDN
export async function getStaticProps() {
    // fetch data from API
    
    const client = await MongoClient.connect(process.env.ATLAS_URI)
    const db = client.db()

    const meetupsCollections = db.collection('meetups');

    const meetups = await meetupsCollections.find().toArray();
    client.close()
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        // incremental static generation
        // revalidate: 10 says to generate this page ever 10 seconds on the server 
        revalidate: 10
    }

}

export default HomePage