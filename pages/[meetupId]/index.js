import MeetupDetail from './../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
    return <MeetupDetail image={props.image} title={props.title} address={props.address} description={props.description} />
}


export async function getStaticProps(context) {
    // fetch data for single meetup
    const meetupId = context.params.meetupId;
    console.log(`meetupId`, meetupId)
    return {
        props: {
            meetupData: {
                id: meetupId,
                image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/moscow-russia-st-basil-cathedral-royalty-free-image-1594133515.jpg?crop=1xw:1xh;center,top&resize=768:*',
                title: 'First Meetup',
                address: 'address',
                description: 'description'
            }
        }
    }
}

export default MeetupDetails;