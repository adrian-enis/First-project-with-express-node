import { Sequelize } from "sequelize-typescript"; // Permite usar sequelize con decoradores y clases de ts
import dotenv from "dotenv";

dotenv.config();  //dotenv, gestiona las variables de entorno desde un archivo env.

const db = new Sequelize(
  process.env.DATABASE_URL,

  {
    models: [__dirname + "/../models/**/*.ts"], //- Sequelize buscará todos los archivos .ts 
    dialect: "postgres",                        // Especifica que se usará PostgreSQL como motor de base de datos.
    dialectOptions: {                           // Configura SSL para conexiones seguras:
      ssl: {
        require: true,                          // Obliga a usar SSL.
        rejectUnauthorized: false,              //  Permite certificados autofirmados (útil en entornos como Heroku o desarrollo).
      },
    },
  }
);

export default db;
