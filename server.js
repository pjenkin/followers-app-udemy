// written from scratch by PNJ following screen shots

const express = require('express');
const app = express();


app.use(express.static(__dirname + '/dist'));

// API endpoints to go here
// separate folder & server.js for each API course.js meessages.js
// db eg Mongo to get & save (state) data


// for any other routes
app.all('*', (req,res) => {
res.status(200).sendFile(__dirname + 'dist/index.htm');
});

// listen on default port or as specified in environment
app.listen(process.env.PORT || 8080);       
