const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const path = require('path')
const routes = require('./api')
// 
const https = require('https');
const http = require('http');
const fs = require('fs');

dotenv.config();

const app = express();

// Use this if server and static app are seperate
// Do not need cors if server is serving the static files
app.use(cors({
    origin: process.env.CORS_ORIGN
}));
// 

console.log
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/dist')));
// 
app.use(routes)


// keep this for production if using nginx and reverse proxy to the current non-privilaged port: ex: 3000
// ...
const PORT = 3000; // Change this to a non-privileged port

try {
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});}catch(err){
  console.error(err)
}
// ...




// // ...if not using nginx...

// // SSL certificate options

// const sslOptions = {
//   key: fs.readFileSync(`/etc/letsencrypt/live/${process.env.DOMAIN}/privkey.pem`),
//   cert: fs.readFileSync(`/etc/letsencrypt/live/${process.env.DOMAIN}/fullchain.pem`)
// };

// // Listen on port 80 for HTTP and redirect to HTTPS

// http.createServer((req, res) => {
//   // res.writeHead(301): This writes an HTTP response header with the status code 301, which means permanent redirect. This tells the browser that the requested resource has been permanently moved to a new location.
//   res.writeHead(301, { "Location": `https://${req.headers.host}${req.url}` });
//   res.end();
//   // This server only handles incoming HTTP traffic (port 80). It doesn’t serve content; instead, it redirects all HTTP requests to the corresponding HTTPS URL using a 301 status code.
// }).listen(process.env.PORT_HTTP || 80, () => {
//   console.log('HTTP server running and redirecting to HTTPS');
// });

// // Listen on port 443 for HTTPS
// // sslOptions: This contains the SSL certificate (cert) and private key (key) needed for encryption.
// // app: This is typically an Express or HTTP handler that serves your actual content (e.g., APIs, webpages).

// https.createServer(sslOptions, app).listen(process.env.PORT_HTTPS || 443, () => {
//   console.log('HTTPS server running on port 443');
// });
// }





