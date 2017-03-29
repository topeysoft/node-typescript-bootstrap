System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BaseRoute;
    return {
        setters: [],
        execute: function () {
            BaseRoute = (function () {
                function BaseRoute() {
                    this.title = "Tour of Heros";
                    this.scripts = [];
                }
                BaseRoute.prototype.addScript = function (src) {
                    this.scripts.push(src);
                    return this;
                };
                BaseRoute.prototype.render = function (req, res, view, options) {
                    res.locals.BASE_URL = "/";
                    res.locals.scripts = this.scripts;
                    res.locals.title = this.title;
                    res.render(view, options);
                };
                return BaseRoute;
            }());
            exports_1("BaseRoute", BaseRoute);
        }
    };
});
//# sourceMappingURL=base-route.js.map