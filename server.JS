const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

// Database Connection (MySQL Example)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: 'yourpassword', // Your MySQL password
  database: 'eritrean_community', // Your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware
app.use(express.json());

// Define the `/api/events` route
app.get('/api/events', (req, res) => {
  const query = 'SELECT * FROM events';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error fetching events');
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
