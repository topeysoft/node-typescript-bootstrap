"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_route_1 = require("./base-route");
var IndexRoute = (function (_super) {
    __extends(IndexRoute, _super);
    function IndexRoute() {
        _super.call(this);
    }
    IndexRoute.create = function (router) {
        console.log("[IndexRoute::create] Creating index route.");
        router.get("/", function (req, res, next) {
            new IndexRoute().index(req, res, next);
        });
    };
    IndexRoute.prototype.index = function (req, res, next) {
        this.title = "Home | Tour of Heros";
        var options = {
            "message": "Welcome to the Tour of Heros"
        };
        this.render(req, res, "index", options);
    };
    return IndexRoute;
}(base_route_1.BaseRoute));
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=index-route.js.map