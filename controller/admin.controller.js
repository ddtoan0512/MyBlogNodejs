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
        const {username, password} =  req.body;

        const hashedPassword = md5(password);

        let adminAcc = await Admin.findOne({username: username, password: hashedPassword});
        
        if(!adminAcc){
            res.render('admin/login', {
                error: 'Sai ten dang nhap hoc mat khau',
            })
        }
        res.cookie('Cookie', adminAcc._id);
        res.redirect('/admin/');
    }
}