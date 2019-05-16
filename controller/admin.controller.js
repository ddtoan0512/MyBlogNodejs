const md5 = require('md5');
const Admin = require('../models/admin.model');

module.exports = {
    index: (req, res) => {
        res.render('admin/index');
    },

    login: (req, res) => {

        res.render('admin/login');
    },

    postLogin: async (req, res) => {
        const { username, password } = req.body;

        const hashedPassword = md5(password);

        let adminAcc = await Admin.findOne({ username: username });

        if (!adminAcc) {
            res.render('admin/login', {
                errors: [
                    'User does not exist.'
                ],
                values: req.body
            });
            return;
        }

        if (adminAcc.password !== hashedPassword) {
            res.render('admin/login', {
                errors: [
                    'Wrong password!'
                ],
                values: req.body
            });
            return;
        }
        res.cookie('adID', adminAcc._id);
        res.redirect('/admin/');
    }
}