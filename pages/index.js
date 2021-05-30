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
    return <MeetupList meetups={props.meetups}/>
        }

// runs on the server on deployment/every incoming request
// not as fast as getStaticProps
export async function getServerSideProps(context){
    console.log(`context`, context)
    const req = context.req;
    const res = context.res;
    // fetch data from API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}
// runs during build process
// faster
// can be cached and distributed by CDN
// export async function getStaticProps() {
//     // fetch data from API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         // incremental static generation
//         // revalidate: 10 says to generate this page ever 10 seconds on the server 
//         revalidate: 10
//     }

// }

export default HomePage