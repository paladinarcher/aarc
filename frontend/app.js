const express = require('express');
const path = require('path');
const app = express();
const errorHandlers = require('./handlers/errorHandlers');
const PORT = process.env.PORT || 3333;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// If the above routes didnt work, a 404 will occur
app.use(errorHandlers.notFound);

// production error handler
app.use(errorHandlers.productionErrors);

console.log(`Currently listening to port ${PORT}`);
app.listen(PORT);