const express = require('express');
const app = require('express')();
const bodyParser = require('body-parser');
const server = require('http').Server(app);
const port = 4400;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/welcome', (req, res) => {
    console.log('params', req.body);
    res.sendFile(__dirname + '/public/welcome.html');
});