const express = require('express');
//app
const app = express();

app.initRoutes = function() {
    const Router = require('./routes/router');
    const routeRules = require('./routes/rules');
    for(let routeRule of routeRules) {
        let routeObject = new Router(routeRule.name, routeRule.rules)
        this.use('/api/' + routeRule.name, routeObject.getRouter());
    }
}


app.initRoutes();


module.exports = app;