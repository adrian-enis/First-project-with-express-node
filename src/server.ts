import { router } from "./router";
import colors from "colors";
import express, { Express } from "express";
import db from "./config/db";

/* =================== ******* ==================== */

//connect Data base
async function connectDB() {
  try {
    await db.authenticate(); // Verifica que la conexión con la DB sea válida
    db.sync(); // Crea las tablas si no existen, según los modelos definidos
    console.log(colors.magenta.bold("conexion exitosa"));
  } catch (error) {
    // console.log(error);
    console.log(colors.red.bold("Hubo un error al conectar la base de dato"));
  }
}

/* =================== ******* ==================== */

connectDB();

//Intancia de express
export const server: Express = express();

//Leer datos de formulario
server.use(express.json());

server.use("/api/products", router);
