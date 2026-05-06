import path from "path";

const absPath = path.resolve('html');

export const errorHandler = (err, req, res, next) => {
    console.error("🔥 Error:", err.message);

    res.status(err.status || 500).send(`
        <h1>Error</h1>
        <p>${err.message}</p>
        <a href="/login">Go back</a>
    `);
};