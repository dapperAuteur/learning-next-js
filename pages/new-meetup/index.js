import {Fragment} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import NewMeetupForm from './../../components/meetups/NewMeetupForm'

function NewMeetupPage() {
    const router = useRouter();
    
    async function addMeetupHandler(enteredMeetupData) {
        // console.log(`enteredMeetupData`, enteredMeetupData)
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(`data`, data)

        router.push('/');
    }
    return (
        <Fragment>
                <Head>
                    <title>Add New Meetups</title>
                    <meta
                        name='description'
                        content='Create a new Meetup event to appear in the list. Create amazing networking opportunities.'/>
                </Head>
                <NewMeetupForm onAddMeetup={addMeetupHandler}/>
            </Fragment>
    )
}

export default NewMeetupPage;