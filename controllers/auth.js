const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = {

    login(req, resp) {
        
    },

    async register(req, resp) {
        let requestBody = req.body;
        let user = await User.findOne({email: requestBody.email});
        if(user) {
            resp.status(409).json({
                message: 'User already exists!'
            });
        } else {
            let salt = bcrypt.genSaltSync(10);
            let password = requestBody.password;
            user = new User({
                email: requestBody.email,
                password: bcrypt.hashSync(password, salt)
            });

            try {
                await user.save();
                resp.status(201).json(user);
            } catch (error) {
                // handle error
            }
        }
    }
}