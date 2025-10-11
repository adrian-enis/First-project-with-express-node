import { Request, Response } from "express";

import Product from "../models/Producto.model";

/* =================== ******* ==================== */

export const getProduct = async (req:Request, res:Response) => {
    try {
        const products = await Product.findAll({
            order:[
                ['price', 'DESC' ] //Orden en que se muestran "DESC O ASC"
            ],
            attributes: {exclude: ["createdAt", "updatedAt"]} // Para excluir algunos campos
        })
        res.json({data: products})
    }catch (error) {
        console.log(error)
    }
}
/* =================== ******* ==================== */

export const getProductById = async (req:Request, res:Response) => {
    try {
      console.log(req.params.id)
      const {id} = req.params
      const product = await Product.findByPk(id)
      if(!product){
        return res.status(404).json({
            error: "Producto No encontrado"
        })
      }
      res.json({data:product})
    }catch (error) {
        console.log(error)
    }
}

/* =================== ******* ==================== */

export const createProduct = async (req: Request, res: Response) => {

    try {

          const product = await Product.create(req.body);
          res.json({ data: product });
        
    } catch (error) {
        console.log(error)
    }
};
