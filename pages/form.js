export function Form() {
    return (
        `<div className="login-container">
            <h2>Login</h2>
            <form action="/submit" method="post">
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <p><a href="/">Go to home</a></p>
        </div>`
    );
}