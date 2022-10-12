const { Router } = require("express");
const { getAllProducts } = require("../controllers/allProductosController");
const { getAllSabores } = require("../controllers/allSaboresController");

const router = Router();
// Rutas:

router.get("/productos", getAllProducts);
router.get("/productos/sabores", getAllSabores);

module.exports = router;
