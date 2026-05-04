import express from 'express';
import path from 'path';
import { home, about, contact } from './pages/home.js';
import { Form } from './pages/form.js';
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send(home());
});

app.get('/contact', (req, res) => {
    res.send(contact());
});

app.get('/about', (req, res) => {
    res.send(about());
});

app.get('/login', (req, res) => {
    const absPath = path.resolve('html/login.html');
    res.sendFile(absPath);
});

app.post('/submit', (req, res) => {
    res.send(`Form submitted
        <p><a href="/">Go to home</a></p>`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});