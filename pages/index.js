import MeetupList from './../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cathedral-santiago-de-compostela-spain-royalty-free-image-1594132834.jpg?crop=1.00xw:0.754xh;0,0.157xh&resize=768:*',
        address: 'address',
        description: 'title',
    },
    {
        id: 'm2',
        title: 'A second Meetup',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/moscow-russia-st-basil-cathedral-royalty-free-image-1594133515.jpg?crop=1xw:1xh;center,top&resize=768:*',
        address: 'address2',
        description: 'title2',
    },
    {
        id: 'm3',
        title: 'A third Meetup',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/moscow-russia-st-basil-cathedral-royalty-free-image-1594133515.jpg?crop=1xw:1xh;center,top&resize=768:*',
        address: 'address3',
        description: 'title3',
    }
]
function HomePage(props) {
    return <MeetupList meetups={DUMMY_MEETUPS}/>
}

export default HomePage