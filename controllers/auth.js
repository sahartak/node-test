module.exports = {

    login(req, resp) {
        resp.status(200).json({
            login: {
                email: req.body.email,
                password: req.body.password
            }
        });
    },

    register(req, resp) {
        resp.status(200).json({
            message: 'register from controller'
        });
    }
}