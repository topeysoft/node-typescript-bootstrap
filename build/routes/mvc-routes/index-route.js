"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_route_1 = require("./base-route");
class IndexRoute extends base_route_1.BaseRoute {
    static create(router) {
        console.log("[IndexRoute::create] Creating index route.");
        router.get("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        this.title = "Home | Tour of Heros";
        let options = {
            "message": "Welcome to the Tour of Heros"
        };
        this.render(req, res, "index", options);
    }
}
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=index-route.js.map