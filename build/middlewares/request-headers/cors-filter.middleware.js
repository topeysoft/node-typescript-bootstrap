"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CorsFilterMiddleware {
    constructor(app) {
        this.app = app;
        this.app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            next();
        });
    }
}
exports.CorsFilterMiddleware = CorsFilterMiddleware;
//# sourceMappingURL=cors-filter.middleware.js.map