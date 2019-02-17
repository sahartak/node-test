const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');


module.exports = {

    async login(req, resp) {
        let requestBody = req.body;
        let user = await User.findOne({email: requestBody.email});
        if(user) {
            if(bcrypt.compareSync(requestBody.password, user.password)) {
                let token = jwt.sign({
                    email: user.email,
                    userId: user._id
                }, keys.jwt, {expiresIn: 3600});
                return resp.status(200).json({
                    token: `Bearer ${token}`
                })
            }
        }
        return resp.status(403).json({
            message: 'Invalid login or password!'
        });
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