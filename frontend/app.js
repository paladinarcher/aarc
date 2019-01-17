const express = require('express');
const path = require('path');
const app = express();
const errorHandlers = require('./handlers/errorHandlers');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

console.log(`Currently listening to port ${process.env.PORT}`);

// If the above routes didnt work, a 404 will occur
app.use(errorHandlers.notFound);

// production error handler
app.use(errorHandlers.productionErrors);

app.listen(process.env.PORT);