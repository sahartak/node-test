module.exports = class Router {

    constructor(controller, routes) {
        this.controller = controller;
        this.routes = routes;
        const express = require('express');
        this.router = express.Router();
        this.initRoutes();
    }

    initRoutes() {
        let controller = require('../controllers/' + this.controller);
        const passport = require('passport');
        for(let route of this.routes) {
            if(route.secure) {
                this.router[route.type](route.rule, passport.authenticate('jwt', {session: false}), controller[route.method]);
            } else {
                this.router[route.type](route.rule, controller[route.method]);
            }

        }
    }
    
    getRouter() {
        return this.router;
    }

}



