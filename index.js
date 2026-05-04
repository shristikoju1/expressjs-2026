import express from 'express';
import path from 'path';
import { home, about, contact } from './pages/home.js';
import { Form } from './pages/form.js';
import { fileURLToPath } from 'url';
const app = express();
const port = 3000;
// recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const absPath = path.resolve('html');


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
    res.sendFile(absPath + '/login.html');
});

app.post('/submit', (req, res) => {
    res.send(`Form submitted
        <p><a href="/">Go to home</a></p>`);
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(absPath + '/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});