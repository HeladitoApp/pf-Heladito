const { Router } = require("express");
const { getAllProducts } = require("../controllers/allProductosController");

const router = Router();
// Rutas:

router.get("/productos", getAllProducts);

module.exports = router;
