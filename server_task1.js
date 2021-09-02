var app = require("express")();


app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.use("*", (req, res) => {
    res.send("404! Not Found! :(");
});

app.listen(5000);

console.log("The NodeJS server on port 5000 is now running....");
