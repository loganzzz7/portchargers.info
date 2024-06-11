import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
// mailchimp
import mailchimp from '@mailchimp/mailchimp_marketing';
// dialogflow
import { SessionsClient } from '@google-cloud/dialogflow';
import { v4 as uuidv4 } from 'uuid';


dotenv.config();

// dialogflow API config
if (process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64) {
    const credentials = Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64, 'base64').toString('utf8');
    fs.writeFileSync('/app/credentialsFile.json', credentials);
    process.env.GOOGLE_APPLICATION_CREDENTIALS = '/app/credentialsFile.json';
  }

// MAILCHIMP API config
// api = https://mailchimp.com/developer/marketing/guides/quick-start/#create-an-account
mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

const app = express();

const port = process.env.PORT || 8080; // idk y but airplay takes up port 5000 and 7000??

// custom domain
const corsOptions = {
    origin: 'https://portchargers.info', // your custom domain
    optionsSuccessStatus: 200,
  };
  
app.use(cors(corsOptions));

app.use(express.json());

// add sub path
app.post('/addSubscriber', async (req, res) => {
    // console.log("entire req test:", req.body);
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

// DIALOGFLOW API
// https://googleapis.dev/nodejs/dialogflow/latest/v2.SessionsClient.html 
// file from googlecloud => credentials
const dialogFlow = new SessionsClient({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
});

// chat path
app.post('/messageBot', async (req, res) => {
    const { message } = req.body;
    const sessionID = uuidv4(); // random session id for user, no need to track convo
    const sessionPath = dialogFlow.projectAgentSessionPath(process.env.GOOGLE_PROJECT_ID, sessionID);

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,  // user input
                languageCode: 'en-US', // msg lan
            },
        },
    };

    try {
        const dialogFlowResponse = await dialogFlow.detectIntent(request);
        const result = dialogFlowResponse[0].queryResult;
        // result.fulfillmentText gets the set up responses on dialogflow
        const setResponseTxt = result.fulfillmentText

        // log to test
        console.log('check response:', setResponseTxt)
        res.status(200).json({ reply: setResponseTxt });
    } catch (error) {
        console.error('Dialogflow error:', error);
        res.status(500).json({ message: "message failed", error: error.toString() });
    }
});

// check port
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});