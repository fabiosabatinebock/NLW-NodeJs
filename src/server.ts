import "reflect-metadata";
import express from "express";

import "./database";

const app = express();

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

app.listen(3000, () => console.log("Server is running"));