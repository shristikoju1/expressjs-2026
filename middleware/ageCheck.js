export function ageCheck(req, res, next) {

    // ✅ Only block if age EXISTS but is under 18
    if (req.query.age && Number(req.query.age) < 18) {
        return res.send("Alert! You cannot access this page. You must be 18 or older.");
    }

    next();
}