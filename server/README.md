# Full Stack Application with React and Node.js

This project demonstrates how to create a full-stack web application with a React frontend and a Node.js (Express) backend. The backend securely handles sensitive operations like API requests with secret keys, while the React frontend interacts with the backend.

## Table of Contents
- [1. Setting Up the Express Server](#1-setting-up-the-express-server)
- [2. Creating a .env File](#2-creating-a-env-file)
- [3. Serving the React App](#3-serving-the-react-app)
- [4. Proxy Setup for Development](#4-proxy-setup-for-development)
- [5. Running the Application](#5-running-the-application)

---

## 1. Setting Up the Express Server

To create the backend server that securely handles sensitive operations like API requests, follow these steps:

### Step 1: Initialize the Project
```bash
mkdir my-fullstack-app
cd my-fullstack-app
npm init -y
```

### Step 2: npm install express cors dotenv axios

### Step 3: Create the Express Server
```
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/api/data', async (req, res) => {
  try {
    const apiKey = process.env.SECRET_API_KEY;
    const response = await axios.get(`https://api.example.com/data?api_key=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

## 2. Creating a .env File

Create a .env file in the root of the project to store sensitive information such as API keys:
```
SECRET_API_KEY=your-secret-api-key-here
```
Remember to add .env to your .gitignore file to prevent it from being committed to version control:
```
 # .gitignore
.env
```

## 3. Serving the React App

You can create a separate React app in the client/ folder, or use Vite or Create React App in your preferred way. Here's a simple example using Create React App:
```
npm create vite app
```

In your React component, make API requests to your Express server:

```
const fetchData = async () => {
  const response = await fetch('http://localhost:5000/api/data');
  const data = await response.json();
  console.log(data);
};
```
## 4. Proxy Setup for Development
```
"proxy": "http://localhost:5000",
```

## 5. Running the Application

Running the Backend:
Start the Express server:
```
node server.js
```

Running the Frontend:
Start the React development server:
```
npm start
```


