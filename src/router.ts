import { Router } from "express";
import { body, param } from "express-validator";
import { createProduct, getProduct, getProductById, updateProduct, updateAvailability, deleteProduct } from "./handlers/product";
import { handleInputErrors } from "./middlewares";

/* =================== ******* ==================== */

export const router: Router = Router();

// Routing

router.get("/", getProduct);

/* =================== ******* ==================== */

router.get("/:id",
  param("id").isInt().withMessage("ID, no valido"),
  handleInputErrors,
  getProductById);

/* =================== ******* ==================== */

router.post(
  "/",
  //Validacion
  body("name")
    .notEmpty()
    .withMessage("El nombre del producto no puede ir vacio"),
  body("price")
    .isNumeric()
    .withMessage("valor no valido")
    .notEmpty()
    .withMessage("El precio del producto no puede estar vacio")
    .custom((value) => value > 0)
    .withMessage("Precio no valido"),
  handleInputErrors,
  createProduct
);

/* =================== ******* ==================== */

router.put("/:id", 
  //Validacion
  param("id").isInt().withMessage("Id no valido"),
 body("name")
    .notEmpty()
    .withMessage("El nombre del producto no puede ir vacio"),
  body("price")
    .isNumeric()
    .withMessage("valor no valido")
    .notEmpty()
    .withMessage("El precio del producto no puede estar vacio")
    .custom((value) => value > 0)
    .withMessage("Precio no valido"),
    body("availability").isBoolean().withMessage("Valor para disponibilidad no valido"),
    handleInputErrors,
  updateProduct);

/* =================== ******* ==================== */

router.patch("/:id",
  param("id").isInt().withMessage("Id no valido"),
  updateAvailability);

/* =================== ******* ==================== */

router.delete("/:id",
   param("id").isInt().withMessage("Id no valido"),
   handleInputErrors,
   deleteProduct

);
