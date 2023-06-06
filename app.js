const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/login.html'));
})

app.get('/home', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/home.html'));
})

app.get('/cards', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/cards.html'));
})

app.get('/cardss', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/cards3.html'));
})

app.get('/cardAdded', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/cards2.html'));
})

app.get('/addCard', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/addCard.html'));
})

app.get('/addCard1', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/addCard1.html'));
})

app.get('/addCard2', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/addCard2.html'));
})

app.get('/addCard3', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/addCard3.html'));
})

app.get('/addCard4', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/addCard4.html'));
})


app.get('/contacts', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/contacts.html'));
})

app.get('/account', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/account.html'));
})

app.get('/notifications', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/notification.html'));
})

app.get('/folders', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/folders.html'));
})

app.get('/folders2', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/folders2.html'));
})

app.get('/folders3', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/folders3.html'));
})

app.get('/folders4', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/folders4.html'));
})

app.get('/folders5', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/folders5.html'));
})

app.get('/folders6', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/folders6.html'));
})

app.get('/folders7', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/folders7.html'));
})

app.get('/folders8', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/folders8.html'));
})

app.get('/folders9', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/folders9.html'));
})

app.get('/addFolder', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/addFolder.html'));
})

module.exports = app;