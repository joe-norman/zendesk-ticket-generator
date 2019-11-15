/*
 * A Lambda function that logs the payload received from a CloudWatch scheduled event.
 */

const axios = require('axios');
const randomTicket = require('./local_modules/randomTicket.js');

exports.handler = async (event, context) => {
    console.info(JSON.stringify(event));

    ticket = randomTicket.newTicket();
    console.log("Ticket generated: " + ticket);

    try {
        const response = await axios({
            method:"post",
            url:`https://${process.env.ZendeskDomain}.com/api/v2/tickets.json`,
            auth:{
                username: `${process.env.ZendeskUserEmail}/token`,
                password: process.env.ZendeskAPIKey
            },
            data: {
                "ticket": {
                    "subject": ticket.subject,
                    "comment": {"body": ticket.description}
                }
            }
        });
        const results = response.data;
        console.log(response.data);
        return {
            statusCode: 200,
            body: results
        };
    } catch (err) {
        console.error(err);
    }
    
}
