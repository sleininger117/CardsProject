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

app.get('/addCard', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/addCard.html'));
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
app.get('/addFolder', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, '/public/addFolder.html'));
})

module.exports = app;