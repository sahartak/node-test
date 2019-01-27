module.exports = {

    login(req, resp) {
        resp.status(200).json({
            message: 'login from controller zc59'
        });
    },

    register(req, resp) {
        resp.status(200).json({
            message: 'register from controller'
        });
    }
}