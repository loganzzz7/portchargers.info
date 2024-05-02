import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mailchimp from '@mailchimp/mailchimp_marketing';

dotenv.config();

// api = https://mailchimp.com/developer/marketing/guides/quick-start/#create-an-account
mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

const port = 8080; // idk y but airplay takes up port 5000 and 7000??

const app = express();

app.use(cors());
app.use(express.json());

app.post('/addSubscriber', async (req, res) => {
    // console.log("Request body:", req.body);
    const {email, firstName, lastName} = req.body;

    try {
        const response = await mailchimp.lists.addListMember (
            process.env.MAILCHIMP_AUDIENCE_ID,
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                }
            }
        );

        console.log("mailchimp response: ", response);
        res.status(200).json({ message: "add sub succ", data: response });
    } catch (error) {
        console.error('error:', error);
        res.status(500).json({ message: "add sub fail", error: error.toString() });
    }
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});