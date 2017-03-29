import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
import { IndexRoute } from "./routes/mvc-routes/index-route";

export class Server {

    public app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();

        this.config();

        this.routes();

        this.api();
    }

    public api() {
    }

   
    public config() {
    }

   
    public routes() {
        let router: express.Router;
        router = express.Router();
        IndexRoute.create(router);
        this.app.use(router);
    }
}