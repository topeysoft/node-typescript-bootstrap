import { NextFunction, Router, Request, Response, Express } from 'express';
import { ModelApiRoutes } from './model-routes';
export class ApiRoutes {
    constructor(app:Express, basePath: string = '/api') {
        var router = Router();
        router.get('/', function (req: Request, res: Response) {
            res.json({ message: 'Welcome to our api!' });
        });
        new ModelApiRoutes(router);
        app.use(basePath,router);
    }
    
}