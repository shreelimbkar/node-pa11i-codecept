const express = require('express');
const app = require('express')();
const bodyParser = require('body-parser');
const hbs = require('hbs');
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

// hbs.registerPartials(__dirname + './views');
app.set('views', __dirname + '/public/views');
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/public/index.html');
    res.render('index');
});

app.post('/welcome', (req, res) => {
    // console.log('params', req.body);
    // res.sendFile(__dirname + '/public/welcome.html');
    res.render('welcome', { name: req.body.uname })
});