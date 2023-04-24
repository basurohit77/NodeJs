const users = require('../user');

function loginController(req, res) {
    if (users.find((u) => (req.body.login == u.login && req.body.password == u.password)))
        res.render('home', { user: req.body.login });
    else
        res.render('signin', { err: 'Invalid login/password' });

}

module.exports = loginController; 