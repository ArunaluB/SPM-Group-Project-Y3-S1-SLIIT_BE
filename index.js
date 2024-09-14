const express = require('express');
const app = express();

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Set the port number
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
