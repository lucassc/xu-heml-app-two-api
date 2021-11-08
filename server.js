'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send(`Environment: ${process.env.ENVIRONMENT}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
