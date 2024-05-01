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
    console.log("Request body:", req.body);
    const {email, firstName, lastName} = req.body;

    console.log(email, firstName, lastName);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});