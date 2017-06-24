"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const model_routes_1 = require("./model-routes");
class ApiRoutes {
    constructor(app, basePath = '/api') {
        var router = express_1.Router();
        router.get('/', function (req, res) {
            res.json({ message: 'Welcome to our api!' });
        });
        new model_routes_1.ModelApiRoutes(router);
        app.use(basePath, router);
    }
}
exports.ApiRoutes = ApiRoutes;
//# sourceMappingURL=api-routes.js.map