export class ConfigManager{
    static get(key:string){
       var env =  process.env;
       console.log('ENVIRONMENT',env);
    }
}