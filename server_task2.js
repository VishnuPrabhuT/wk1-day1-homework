var app = require("express")();

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get("/", (req, res) => {
    res.sendFile("/public/home.html", { root: __dirname });
});

app.get("/about", (req, res) => {
    res.sendFile("/public/About.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
    res.sendFile("/public/Contact.html", { root: __dirname });
});

app.use("*", (req, res) => {
    res.send("Invalid request! :(");
});

app.listen(5000);

console.log("The NodeJS server on port 5000 is now running....");
