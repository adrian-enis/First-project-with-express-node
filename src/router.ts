import { Router } from "express";
import { body, param } from "express-validator";
import { createProduct, getProduct, getProductById } from "./handlers/product";
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

router.put("/", (req, res) => {
  res.json("Desde put");
});

/* =================== ******* ==================== */

router.patch("/", (req, res) => {
  res.json("Desde patch");
});

/* =================== ******* ==================== */

router.delete("/", (req, res) => {
  res.json("Desde delete");
});
