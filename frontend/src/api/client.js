import axios from 'axios';

// Create an instance of axios for the API client
const client = axios.create({
  baseURL: 'https://your-backend-url.com/api', // Replace with your backend URL
  timeout: 1000,
  headers: {'Content-Type': 'application/json'},
});

export default client;