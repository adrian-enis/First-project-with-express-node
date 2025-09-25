import {router} from "./router"
import express, { Express } from "express"

export const server: Express = express()

server.use("/api", router)