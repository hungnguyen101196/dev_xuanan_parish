const passport = require('passport');
const constants = require('../configs/constants');
const rp = require('request-promise');
module.exports = {
    index: async(req, res) => {
        res.render('login/index', { layout: 'login', title: "Cổng thông tin điện tử Giáo xứ Xuân An" })
    },
    login: async(req, res, next) => {
        console.log(req.body)
        passport.authenticate('local', function(err, user) {
            if (err) {
                return next(err); }
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                return res.json(user)
            });
        })(req, res, next);
    },
    register: async (req, res) =>{
        try {
            const options = {
                method: "POST",
                uri: constants.API_URL + 'api/user/create',
                json: true
            };
            let result = await rp(options);
            return res.json(result)
        } catch (error) {
            return res.json(error)
        }
    }
}