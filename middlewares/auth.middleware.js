const Admin = require('../models/admin.model');

module.exports.requireAuth =  async(req, res, next) => {
        if(!req.signedCookies.adID){
            res.redirect('login');
            return;
        }

        let adminAcc = await Admin.findOne({_id: req.signedCookies.adID});

        if(!adminAcc){
            res.redirect('login');
            return;
        }

        res.locals.admin = adminAcc;
        next();
    }


