import "reflect-metadata";
import express, { Request, Response, NextFunction} from "express";
import "express-async-errors";

import { router } from "./routes";
import "express-async-errors";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error){
    return response.status(400).json({
      error: err.message      
    })  
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})


app.listen(3000, () => console.log("Server is running"));

/**
 * Get => Buscar informações
 * Post => Inserir (Criar) informações
 * Put => Alterar informações
 * Delete => Remover um dado
 * Patch => Alterar uma informação específica  
 */

/*
 * Tipos de parâmetros
 * Routes params => http://localhost:3000/produtos/250216121
 * Query params => http://localhost:3000/produtos?name=teclado&description=tecladobom
 * 
 * Body Params => {
 * "name": "teclado",
 * "description": "teclado bom"
 * }
*/