const express = require("express");
require("dotenv").config();
const app = express();
const { sequelize } = require("./app/models/index");

const PORT = process.env.PORT || 5020;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//RUTAS PRODUCTOS
app.use("/api/productos", require("./app/routes/productos"));
//RUTAS VENTAS
app.use("/api/ventas", require("./app/routes/ventas"));
//RUTAS DETALLESVENTAS
app.use("/api/detallesVentas", require("./app/routes/detallesVentas"));
//RUTAS USUARIOS
app.use("/api/usuarios", require("./app/routes/usuarios"));

app.listen(PORT, function () {
  console.log(`La app ha arrancado en http://localhost:${PORT}`);

  sequelize.sync().then(() => {
    console.log("Se ha establecido la conexión");
  });
});
