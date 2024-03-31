import { DataSource } from "typeorm";
import { Cliente } from "./entities/cliente";
import { Usuario } from "./entities/usuario";
import { DBConeection, confgDB } from "../config/db.config";


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
        entities: [Cliente,Usuario],
        subscribers: [],
        migrations: [],
    })  
   



