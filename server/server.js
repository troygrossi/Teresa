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
app.use(cors());
app.use(cors({
    origin: process.env.CORS_ORIGN
}));
// 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/dist')));
// 
app.use(routes)


if(process.env.NODE_ENV === "development"){
  const PORT = process.env.PORT_HTTP;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}else{

// SSL certificate options
const sslOptions = {
  key: fs.readFileSync(`/etc/letsencrypt/live/${process.env.DOMAIN}/privkey.pem`),
  cert: fs.readFileSync(`/etc/letsencrypt/live/${process.env.DOMAIN}/fullchain.pem`)
};

// Listen on port 80 for HTTP and redirect to HTTPS
http.createServer((req, res) => {
  res.writeHead(301, { "Location": `https://${req.headers.host}${req.url}` });
  res.end();
}).listen(process.env.PORT_HTTP || 80, () => {
  console.log('HTTP server running and redirecting to HTTPS');
});

// Listen on port 443 for HTTPS
https.createServer(sslOptions, app).listen(process.env.PORT_HTTPS || 443, () => {
  console.log('HTTPS server running on port 443');
});
}





