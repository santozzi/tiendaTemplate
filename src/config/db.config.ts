import dotenv from 'dotenv';
dotenv.config();
export interface DBConeection{
    host:string;
    port:number;
    userName:string;
    password:string;
    database:string;
   
}
export function confgDB():DBConeection{
   const {DB_HOST,DB_PORT,DB_USER_NAME,DB_PASSWORD,DB_DATABASE,DB_DATABASE_TEST} = process.env
    if(!DB_HOST)
      throw  new Error ("DB_HOST fail env");
    if(!DB_PORT)
        throw  new Error ("DB_PORT fail env");
    if(!DB_USER_NAME)
        throw  new Error ("DB_USER_NAME fail env");
    if(!DB_PASSWORD)
        throw  new Error ("DB_PASSWORD fail env");
    if(!DB_DATABASE)
        throw  new Error ("DB_DATABASE fail env");

    const config:DBConeection = {
       host: DB_HOST,
       userName: DB_USER_NAME,
       password: DB_PASSWORD,
       database: DB_DATABASE,
       port: parseInt(DB_PORT),
     
 } 
    return config;

}

