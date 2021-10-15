const express = require("express");
const {
  crearProducto,
  listarProductos,
  editarProducto,
} = require("../controllers/ProductosControlador");
const router = express.Router();

router.get("/", listarProductos);
router.post("/", crearProducto);
router.put("/", editarProducto);
module.exports = router;
