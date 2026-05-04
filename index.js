import express from 'express';
import { home, about, contact } from './pages/home.js';
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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});