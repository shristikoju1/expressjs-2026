import express from 'express';
import path from 'path';
import { home, about, contact } from './pages/home.js';
import { Form } from './pages/form.js';
import { fileURLToPath } from 'url';
import { ageCheck } from './middleware/ageCheck.js';
import { ipCheck } from './middleware/ipCheck.js';
const app = express();
const port = 3000;
// recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const absPath = path.resolve('html');

function checkRoute(req, res, next) {
    const validRoutes = ['/', '/contact', '/about', '/login'];
    if (validRoutes.includes(req.path)) {
        next();
    } else {
        res.status(404).sendFile(absPath + '/404.html');
    }
}

// app.use(ipCheck);
// app.use(checkRoute);
// app.use(ageCheck);

/*----------built-in middleware for parsing json and urlencoded data----------*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


//ageCheck middleware for only root '/' route
app.get('/', ageCheck, (req, res) => {
    console.log(req.query, '---------------------------------requestt from index')
    if (!req.query.age) {
        return res.redirect('/?age=20');
    }

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

//ipCheck middleware for only /submit route
app.post('/submit', ipCheck, (req, res) => {
    console.log(req.body, 'form data');
    res.send(`<h1>Form submitted.</h1>
        <p>Name: ${req.body?.name || '-'}</p>
        <p>Email: ${req.body?.email || '-'}</p>
        <p>Password: ${req.body?.password || '-'}</p>
        <p><a href="/">Go to home</a></p>`);
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(absPath + '/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});