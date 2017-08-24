module.exports = (req, res, next) => {
    res.header('X-Hello', 'World')
    next()
}

module.exports = (req, res, next) => {

    // Implement the middleware function based on the options object
    if (req.method === 'POST') {
        
        req.body.start = new Date().toISOString();
        req.body.end=null;
        req.body.user = 2;
        req.body.ended = false;
    }else if (req.method === 'PATCH') {
        if (req.body.ended = true) {
            req.body.end = new Date().toISOString();
        }
    }
    res.set("Connection", "close");
    next()
}
