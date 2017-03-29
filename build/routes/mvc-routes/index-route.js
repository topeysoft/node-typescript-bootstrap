System.register(["./base-route"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var base_route_1, IndexRoute;
    return {
        setters: [
            function (base_route_1_1) {
                base_route_1 = base_route_1_1;
            }
        ],
        execute: function () {
            IndexRoute = (function (_super) {
                __extends(IndexRoute, _super);
                function IndexRoute() {
                    return _super.call(this) || this;
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
            exports_1("IndexRoute", IndexRoute);
        }
    };
});
//# sourceMappingURL=index-route.js.map