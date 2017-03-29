System.register(["express", "./routes/mvc-routes/index-route"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express, index_route_1, Server;
    return {
        setters: [
            function (express_1) {
                express = express_1;
            },
            function (index_route_1_1) {
                index_route_1 = index_route_1_1;
            }
        ],
        execute: function () {
            Server = (function () {
                function Server() {
                    this.app = express();
                    this.config();
                    this.routes();
                    this.api();
                }
                Server.bootstrap = function () {
                    return new Server();
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
            exports_1("Server", Server);
        }
    };
});
//# sourceMappingURL=server.js.map