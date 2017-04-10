import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
import { IndexRoute } from "./routes/mvc-routes/index-route";
import { CorsFilterMiddleware } from './middlewares/request-headers/cors-filter.middleware';
import { Router, Express } from 'express';

export class Server {

    public app: Express;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();

        this.config();
        this.setupHeaders();
        this.routes();
        this.api();
    }

    public setupHeaders() {
        new CorsFilterMiddleware(this.app);
    }
    public api() {
    }

   
    public config() {
    }

   
    public routes() {
        let router: Router;
        router = express.Router();
        IndexRoute.create(router);
        this.app.use(router);
    }
}