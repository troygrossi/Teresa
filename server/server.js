const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const path = require('path')
const routes = require('./api')

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

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});