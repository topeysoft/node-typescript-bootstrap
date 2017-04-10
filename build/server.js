"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const errorHandler = require("errorhandler");
const methodOverride = require("method-override");
const index_route_1 = require("./routes/mvc-routes/index-route");
const cors_filter_middleware_1 = require("./middlewares/request-headers/cors-filter.middleware");
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();
        this.setupHeaders();
        this.routes();
        this.api();
    }
    setupHeaders() {
        new cors_filter_middleware_1.CorsFilterMiddleware(this.app);
    }
    api() {
    }
    config() {
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "pug");
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cookieParser("super-strong-secret-dc0649f7-e9b9-4133-8e2e-6f4677bb3492"));
        this.app.use(methodOverride());
        this.app.use((err, req, res, next) => {
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
        this.app.use((req, res, next) => {
            next();
        });
    }
    routes() {
        let router;
        router = express.Router();
        index_route_1.IndexRoute.create(router);
        this.app.use(router);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map