import { NextFunction, Request, Response, Router } from 'express';
import { ObjectID } from 'mongodb';
export class ModelApiRoutes {

  private basePath: string = '/';
  constructor(private router: Router) {
    this.getRoutes();
    this.postRoutes();
    this.putRoutes();
    this.patchRoutes();
    this.deleteRoutes();
  }
  private postRoutes() {
    this.router.post(`${this.basePath}/projects/:project_id/entities`, (req, res) => {
      this.createDevice(req, res);
    });

    this.router.post(`${this.basePath}/projects/:project_id/entities/:entity_id/items`, (req, res) => {
      this.createDevice(req, res);
    });
  }
  private putRoutes() {
    this.router.put(`${this.basePath}/projects/:project_id/entities/:entity_id`, (req, res) => {
      this.updateDevice(req, res);
    });
    this.router.put(`${this.basePath}/projects/:project_id/entities/:entity_id/items/:item_id`, (req, res) => {
      this.updateDevice(req, res);
    });
  }
  private patchRoutes() {
    this.router.patch(`${this.basePath}/projects/:project_id/entities/:entity_id/`, (req, res) => {
      this.partiallyUpdateDevice(req, res);
    });
    this.router.patch(`${this.basePath}/projects/:project_id/entities/:entity_id/items/:item_id`, (req, res) => {
      this.partiallyUpdateDevice(req, res);
    });
  }
  private deleteRoutes() {
    this.router.delete(`${this.basePath}/projects/:project_id/entities/:entity_id`, (req, res) => {
      this.deleteDevice(req, res);
    });
  }
  private getRoutes() {
    this.router.get(`${this.basePath}/projects/:project_id/entities`, (req, res) => {
      this.getManyDevices(req, res);
    });
    this.router.get(`${this.basePath}/projects/:project_id/entities/items`, (req, res) => {
      this.getManyDevices(req, res);
    });
    this.router.get(`${this.basePath}/projects/:project_id/entities/:entity_id`, (req, res) => {
      this.getOneDevice(req, res);
    });
    this.router.get(`${this.basePath}/projects/:project_id/entities/:entity_id/items/:item_id`, (req, res) => {
      this.getOneDevice(req, res);
    });
  }

  private getManyDevices(req: Request, res: Response) {
    var queryParams:{skip:number, limit:number} = req.query;
    var skip=queryParams.skip||0;
    var limit=queryParams.limit||1000;
    skip=parseInt(skip+'');
    limit=parseInt(limit+'');
    var fields={};
    DeviceRepository.getMany({}, fields, skip, limit).then((entities)=>{
      res.json(entities);
    })
    .catch((err)=>{
      console.log(err);
      res.sendStatus(500);
    });
  }
  private getOneDevice(req: Request, res: Response) {
    var id=req.params.entity_id;
    var filter:any={$or:[{entity_id:id}]};
    try{
      filter.$or.push({_id:new ObjectID(id)});
    }catch(e){}
    
     DeviceRepository.getOne(filter).then((entity)=>{
      res.json(entity);
    })
    .catch((err)=>{
      console.log(err);
      res.sendStatus(500);
    })
  }
  private createDevice(req: Request, res: Response) {
     var entity:SmartDevice = req.body;
     DeviceRepository.upsert(entity).then((entity)=>{
      res.json(entity);
    })
    .catch((err)=>{
      console.log(err);
      res.sendStatus(500);
    })
  }
  private updateDevice(req: Request, res: Response) {
     var entity:SmartDevice = req.body;
     DeviceRepository.upsert(entity).then((entity)=>{
      res.json(entity);
    })
    .catch((err)=>{
      console.log(err);
      res.sendStatus(500);
    })
  }
  private partiallyUpdateDevice(req: Request, res: Response) {
    var entity:SmartDevice = req.body;
     DeviceRepository.upsert(entity).then((entity)=>{
      res.json(entity);
    })
    .catch((err)=>{
      console.log(err);
      res.sendStatus(500);
    });
  }
  private deleteDevice(req: Request, res: Response) {
    var id=req.params['entity_id'];
    DeviceRepository.delete(id).then((result)=>{
      res.json(result);
    })
    .catch((err)=>{
      console.log(err);
      res.sendStatus(500);
    });
  }
}

