const express = require('express');
const path = require('path');
const mongoose = require('./db_setup');
const { placeOrder } = require('./dbOperations');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.post('/place-order', async (req, res) => {
  try {
    const response = await placeOrder(req.body);
    res.json(response); // Send the orderId back to the frontend
  } catch (error) {
    res.status(500).json({ message: 'Error placing order', error });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
