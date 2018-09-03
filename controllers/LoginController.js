const passport = require('passport');


module.exports = {
    index: async(req, res) => {
        res.render('login/index', { layout: 'login', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    },
    login: async(req, res, next) => {
        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                return res.json({ Success: true, Message: "Login Success" })
            });
        })(req, res, next);
    }
}