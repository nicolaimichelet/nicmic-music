import axios from 'axios'

const apiKey = process.env.MAILCHIMP_API_KEY

export default async function handler(req, res) {
    try {
        const { email } = req.body

        const data = {
            email_address: email,
            status: 'subscribed',
        }

        const response = await axios.post(
            `https://us21.api.mailchimp.com/3.0/lists/669189cd9f/members`,
            data,
            {
                auth: {
                    password: apiKey,
                },
            }
        )

        res.status(response.status).json(response.data)
    } catch (error) {
        console.log('Failed to subscribe to the newsletter:', error.message)

        if (error.response && error.response.status === 400) {
            res.status(400).json({
                error: 'Bad Request: Invalid email address',
            })
        } else {
            res.status(500).json({
                error: 'Failed to subscribe to the newsletter',
            })
        }
    }
}
