module.exports = class Router {

    constructor(name, routes) {
        this.name = name;
        this.routes = routes;
        const express = require('express');
        this.router = express.Router();
        this.initRoutes();
    }

    initRoutes() {
        let controller = require('../controllers/' + this.name);
        for(let route of this.routes) {
            this.router[route.type](route.rule, controller[route.method]);
        }
    }
    
    getRouter() {
        return this.router;
    }

}



