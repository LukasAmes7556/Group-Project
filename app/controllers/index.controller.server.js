export function displayHomePage(req, res, next) {
   res.sendFile(process.cwd + '/client/index.html');
};




