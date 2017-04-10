"use strict";
var express = require("express");
var index_route_1 = require("./routes/mvc-routes/index-route");
var cors_filter_middleware_1 = require('./middlewares/request-headers/cors-filter.middleware');
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.setupHeaders();
        this.routes();
        this.api();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.setupHeaders = function () {
        new cors_filter_middleware_1.CorsFilterMiddleware(this.app);
    };
    Server.prototype.api = function () {
    };
    Server.prototype.config = function () {
    };
    Server.prototype.routes = function () {
        var router;
        router = express.Router();
        index_route_1.IndexRoute.create(router);
        this.app.use(router);
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map