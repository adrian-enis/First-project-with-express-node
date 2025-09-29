import {router} from "./router"
import express, { Express } from "express"
import db from "./config/db"


//connect Data base
async function connectDB() {
    try {
        await db.authenticate(); // Verifica que la conexión con la DB sea válida
        db.sync(); // Crea las tablas si no existen, según los modelos definidos
        console.log('conexion exitosa');
    } catch (error) {
        console.log(error);
        console.log('Hubo un error al conectar la base de dato');
    }
}
connectDB();
export const server: Express = express()



server.use("/api/products", router)