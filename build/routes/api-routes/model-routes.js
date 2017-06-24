"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const devices_repo_1 = require("../../repository/devices/devices-repo");
const mongodb_1 = require("mongodb");
class ModelApiRoutes {
    constructor(router) {
        this.router = router;
        this.basePath = '/';
        this.getRoutes();
        this.postRoutes();
        this.putRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    postRoutes() {
        this.router.post(`${this.basePath}`, (req, res) => {
            this.createDevice(req, res);
        });
    }
    putRoutes() {
        this.router.put(`${this.basePath}/:device_id`, (req, res) => {
            this.updateDevice(req, res);
        });
    }
    patchRoutes() {
        this.router.patch(`${this.basePath}/:device_id`, (req, res) => {
            this.partiallyUpdateDevice(req, res);
        });
    }
    deleteRoutes() {
        this.router.delete(`${this.basePath}/:device_id`, (req, res) => {
            this.deleteDevice(req, res);
        });
    }
    getRoutes() {
        this.router.get(`${this.basePath}`, (req, res) => {
            this.getManyDevices(req, res);
        });
        this.router.get(`${this.basePath}/:device_id`, (req, res) => {
            this.getOneDevice(req, res);
        });
    }
    getManyDevices(req, res) {
        var queryParams = req.query;
        var skip = queryParams.skip || 0;
        var limit = queryParams.limit || 1000;
        skip = parseInt(skip + '');
        limit = parseInt(limit + '');
        var fields = {};
        devices_repo_1.DeviceRepository.getMany({}, fields, skip, limit).then((devices) => {
            res.json(devices);
        })
            .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    }
    getOneDevice(req, res) {
        var id = req.params.device_id;
        var filter = { $or: [{ device_id: id }] };
        try {
            filter.$or.push({ _id: new mongodb_1.ObjectID(id) });
        }
        catch (e) { }
        devices_repo_1.DeviceRepository.getOne(filter).then((device) => {
            res.json(device);
        })
            .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    }
    createDevice(req, res) {
        var device = req.body;
        devices_repo_1.DeviceRepository.upsert(device).then((device) => {
            res.json(device);
        })
            .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    }
    updateDevice(req, res) {
        var device = req.body;
        devices_repo_1.DeviceRepository.upsert(device).then((device) => {
            res.json(device);
        })
            .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    }
    partiallyUpdateDevice(req, res) {
        var device = req.body;
        devices_repo_1.DeviceRepository.upsert(device).then((device) => {
            res.json(device);
        })
            .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    }
    deleteDevice(req, res) {
        var id = req.params['device_id'];
        devices_repo_1.DeviceRepository.delete(id).then((result) => {
            res.json(result);
        })
            .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    }
}
exports.ModelApiRoutes = ModelApiRoutes;
//# sourceMappingURL=model-routes.js.map