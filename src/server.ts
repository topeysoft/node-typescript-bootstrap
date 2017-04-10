import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
import { IndexRoute } from "./routes/mvc-routes/index-route";
import { CorsFilterMiddleware } from './middlewares/request-headers/cors-filter.middleware';
import { Router, Express, NextFunction, Response, Request } from 'express';

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
        this.app.use((err:any, req:Request, res:Response, next:NextFunction)=> {
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
        this.app.use((req, res, next) => {
            next();
        });
    }

   
    public routes() {
        let router: Router;
        router = express.Router();
        IndexRoute.create(router);
        this.app.use(router);
    }
}