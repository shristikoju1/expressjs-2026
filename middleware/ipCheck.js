export function ipCheck(req, res, next) {
    const ip = req.socket.remoteAddress;

    if (ip.includes('192.168.1.95')) {
        return res.send("Alert! You cannot access this page. Your IP address is blocked.");
    }

    next();
}