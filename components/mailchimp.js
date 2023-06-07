//import mailchimp from 'mailchimp-api-v3'

//const mailchimpInstance = new mailchimp(process.env.MAILCHIMP_API_KEY)

export async function subscribeToNewsletter(email) {
    try {
        // const result = await mailchimpInstance.post(
        //     `/lists/{669189cd9f}/members`,
        //     {
        //         email_address: email,
        //         status: 'subscribed',
        //     }
        // )
        console.log('EMail is', email)
        return email
    } catch (error) {
        throw new Error(
            `Failed to subscribe to the newsletter: ${error.message}`
        )
    }
}
