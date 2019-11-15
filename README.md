# zendesk-ticket-generator

This project contains source code and supporting files for a serverless application that you can deploy with the AWS Serverless Application Model (AWS SAM) command line interface (CLI).

It creates an AWS Lambda function that makes a new ticket in Zendesk once per minute. The idea is to generate a bulk of fake tickets for demos and testing. You can edit randomTicket.js to alter the subjects and descriptions of the fake tickets, as well as adding more. It's just a big switch statement.

This is intended for use by the author and not meant to be distributed, but you are free to do so if you choose.

## Deployment
To deploy this application using the [sam cli](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html), follow the following steps:

* Download the repo locally
* Navigate your cli into the root folder of the repo
* Install Docker and make sure it's running
* Make sure you have the aws cli configured and sam cli installed. ("aws configure") and try "aws s3 ls" to make sure it's working
* Run "sam build --use-container && sam package <your-bucket-name> --output-template-file packaged.yaml"
    * You can leave off --use-container if you want. Read the sam cli docs for more info.
* Run "sam publish --template packaged.yaml --region <your preferred region>"
    * You can skip this step and just drop the packaged.yaml file from the previous step into CloudFormation if you prefer. If you go the CloudFormation route, skip the rest of these steps
* In the AWS Console, go to "Serverless Application Repository" under Services
* On the left, click "Available Applications" then click the "Private Applications" tab
* Check the box about IAM roles to show everything. Then click "Zendesk-Ticket-Generator
* Fill in each of the Environment Variables, and hit deploy

If everything worked, you should have a new ticket once per minute in your Zendesk account. You can debut with CloudWatch logs otherwise.
