import { Request, Response } from "express";

import Product from "../models/Producto.model";

/* =================== ******* ==================== */
//Get all Product
export const getProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      order: [
        ["price", "DESC"], //Orden en que se muestran "DESC O ASC"
      ],
      attributes: { exclude: ["createdAt", "updatedAt"] }, // Para excluir algunos campos
    });
    res.json({ data: products });
  } catch (error) {
    console.log(error);
  }
};
/* =================== ******* ==================== */
// Get Product BY Id

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({
        error: "Producto No encontrado",
      });
    }
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

/* =================== ******* ==================== */
//Get Create Product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

/* =================== ******* ==================== */
// UPDATE

export const updateProduct = async (req: Request, res: Response) => {
  // Para actualizar, verificar que el Item exista
  const { id } = req.params;
  const product = await Product.findByPk(id);
  if (!product) {
    return res.status(404).json({
      error: "Producto No encontrado",
    });
  }

  await product.update(req.body); // Aplica actualizaciones parciales directamente en el modelo
  //product.name = req.body.name; // Sobrescribe manualmente el campo 'name'; elimina valores no incluidos en req.body
  await product.save(); // Persiste los cambios en la base de datos

  res.json({ data: product });
};

/* =================== ******* ==================== */
// Patch Modifie Partial

export const updateAvailability = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (!product) {
    return res.status(404).json({
        error: "Producto no encontrado"
    });
  }

  product.availability = !product.dataValues.availability //Eliminado logico
  await product.save()
  res.json({data:product})
};

/* =================== ******* ==================== */
// DeleteProduct

export const deleteProduct = async (req:Request, res:Response) => {
    const {id} = req.params
    const product = await Product.findByPk(id)

    if(!product){
        return res.status(404).json({
            error:"Producto no encontrado"
        })
    }

    // await product.destroy()// Eliminado de base de datos, sin embargo, podemos usar el eliminado logico
    product.isDeleted = true
    await product.save()
   res.json({ data: product })

}

