const { Productos } = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const crearProducto = async (req, res) => {
  try {
    const productoCreado = await Productos.create(req.body);
    if (productoCreado) {
      res.status(200).send({
        productoCreado,
      });
    } else {
      res.status(400).send({
        msg: "Error al crear el producto",
      });
    }
  } catch (error) {}
};

const listarProductos = async (req, res) => {
  try {
    const listaProductos = await Productos.findAll();
    if (listaProductos.length > 0) {
      res.status(200).send({
        listaProductos,
      });
    } else {
      res.status(200).send({
        msg: "No hay productos registrados",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const editarProducto = async (req, res) => {
  res.status(200).send({
    msg: "editar productos",
  });
};

module.exports = {
  crearProducto,
  listarProductos,
  editarProducto,
};
