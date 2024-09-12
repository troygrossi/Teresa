// const router = require("express").Router();

// router.get("/calendar", async (req, res) => {
//   const { google } = require("googleapis");

//   // Load the service account key JSON file
//   const serviceAccount = require("./calendar/calendar.json");

//   // Authenticate a JWT client with the service account
//   const jwtClient = new google.auth.JWT(
//     serviceAccount.client_email,
//     null,
//     serviceAccount.private_key,
//     ["https://www.googleapis.com/auth/calendar.events."] // Scope for read only events
//   );

//   // Initialize the Google Calendar API
//   const calendar = google.calendar({ version: "v3", auth: jwtClient });

//   // Fetch events from the calendar
//   jwtClient.authorize((err, tokens) => {
//     if (err) {
//       console.error("Error authorizing service account:", err);
//       return;
//     }

//     // Replace 'primary' with your calendar ID if necessary
//     calendar.events.list(
//       {
//         calendarId: "primary",
//         timeMin: new Date().toISOString(),
//         maxResults: 10,
//         singleEvents: true,
//         orderBy: "startTime",
//       },
//       (err, res) => {
//         if (err) {
//           console.error("The API returned an error: " + err);
//           return;
//         }
//         const events = res.data.items;
//         if (events.length) {
//           console.log("Upcoming events:");
//           events.map((event, i) => {
//             const start = event.start.dateTime || event.start.date;
//             console.log(`${start} - ${event.summary}`);
//           });
//         } else {
//           console.log("No upcoming events found.");
//         }
//         res.json(events);
//       }
//     );
//   });
// });

// module.exports = router;
