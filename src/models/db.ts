import { DataSource } from "typeorm";
import { Cliente } from "./entities/cliente";
import { Auth } from "./entities/auth";
import { DBConeection, confgDB } from "../config/db.config";
import { Empleado } from "./entities/empleado";
import { Persona } from "./entities/persona";

//TODO: preparar una plantilla con mongoDB
     const config:DBConeection = confgDB();
   export     const AppDataSource = new DataSource({
        type: "mysql",
        host: config.host,
        port: config.port,
        username: config.userName,
        password: config.password,
        database: config.database,
        synchronize: true,
        logging: true,
        entities: [Persona,Cliente,Auth,Empleado],
        subscribers: [],
        migrations: [],
    })  
   



