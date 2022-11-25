

export function displayHomePage(req, res, next) {
    res.sendFile(process.cwd() + "/app/client/index.html");
};



