class AppClass {


    constructor(configs) {
        this.app = require('express')();
        this.configs = configs;
        this.middlewares();
        this.dbConnect(configs.MongoURI)
        this.initRoutes();
    }

    middlewares() {
        this.app.use(require('morgan')('dev'))
        this.app.use(require('cors')());

        const bodyParser = require('body-parser');
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
        const passport = require('passport');
        this.app.use(passport.initialize());
        require('./middleware/passport')(passport);
    }

    initRoutes() {
        const Router = require('./routes/router');
        const routeRules = require('./routes/rules');
        for(let routeRule of routeRules) {
            let routeObject = new Router(routeRule.controller, routeRule.rules)
            this.app.use('/api/' + routeRule.controller, routeObject.getRouter());
        }
    }

    dbConnect(mongoURI) {
        const mongoose = require('mongoose');
        mongoose.connect(mongoURI)
            .then(() => console.log('mongo connected'))
            .catch(error => console.log(error));

    }

    getApp() {
        return this.app;
    }


}



const configs = require('./config/keys');
const app = new AppClass(configs);
module.exports = app.getApp();