Steps to Use a Service Account:
Create a Service Account:

Go to the Google Cloud Console.
Select your project and navigate to IAM & Admin > Service Accounts.
Click Create Service Account.
Fill in the details and click Create.
In the Service account permissions step, you can skip or add roles depending on the access needed.
Download the Service Account Key:

After creating the service account:
Click the >link to enter the service account
Click the >Keys tab
under the Keys section, click Add Key and select JSON.
This will download a JSON file that contains the private key and other credentials for the service account.
Refresh the page to see the new key that was created

Share Your Calendar with the Service Account:
Go to your Google Calendar in the browser.
Find the calendar you want the service account to access.
Click the Settings (gear icon) and go to Settings and sharing for the calendar.
Under Share with specific people, add the service account email (it looks like your-service-account@your-project-id.iam.gserviceaccount.com) and give it the necessary permissions (like Make changes to events or See all event details).