const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => {
    console.log('server is up(3000)')
});

app.use("/", (req, res, next) => {
    console.log('Middleware!!');
    next();
});

app.use(express.static(path.join(__dirname, "/html")));
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("<h3>Express Application!!</h3>");
});
app.post("/processgreet", (req, res) => {
    res.send("<h3>Welcome!!</h3>");
});

app.post("/checklogin", (req, res) => {
    let login = req.body.login;
    let password = req.body.password;
    if (login == 'John' && password == '123') {
        res.send('Welcome!!');
    }
    else {
        res.send('Invalid login/password!!');
    }

})