var fs = require("fs");
var path = require("path");
var app = require("express")();


app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get("/", (req, res) => {
    sendResponse(req, res, "home");
});

app.get("/about", (req, res) => {
    sendResponse(req, res, "about");
});

app.get("/contact", (req, res) => {
    sendResponse(req, res, "contact");
});

app.use("*", (req, res) => {
    res.send("Invalid request! :(");
});

app.listen(5000);

console.log("The NodeJS server on port 5000 is now running....");


function sendResponse(req, res, page) {
    var filePath = path.resolve(`./public/${page}.html`);
    var fileExt = path.extname(filePath);

    if (fileExt === '.html') {
        fs.access(filePath, function (err) {
            if (err) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                res.end(`<html><body><h1>Error 404: ${fileUrl} not
            found</h1></body></html>`);
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');

            fs.createReadStream(filePath).pipe(res);

        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><h1>Error 404: ${fileUrl} is
            not an HTML file</h1></body></html>`);
    }
}