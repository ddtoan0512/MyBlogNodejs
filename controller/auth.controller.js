const md5 = require('md5');
const Admin = require('../models/admin.model');

module.exports = {
    login: (req, res) => {

        res.render('login');
    },

    postLogin: async (req, res) => {
        const { username, password } = req.body;

        const hashedPassword = md5(password);

        let adminAcc = await Admin.findOne({ username: username });

        if (!adminAcc) {
            res.render('login', {
                errors: [
                    'User does not exist.'
                ],
                values: req.body
            });
            return;
        }

        if (adminAcc.password !== hashedPassword) {
            res.render('login', {
                errors: [
                    'Wrong password!'
                ],
                values: req.body
            });
            return;
        }
        res.cookie('adID', adminAcc._id, {
            signed: true
        });
        res.redirect('/admin');
    }
}