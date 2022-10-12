const { Router } = require("express");
const { getAllProducts } = require("../controllers/allProductosController");
const { getAllSabores } = require("../controllers/allSaboresController");
const { getAllToppings } = require("../controllers/allToppingsController");
const { getAllFrutas } = require("../controllers/allFrutasController");
const { getAllSecos } = require("../controllers/allSecosController");

const router = Router();
// Rutas:

router.get("/productos", getAllProducts);
router.get("/productos/sabores", getAllSabores);
router.get("/productos/toppings", getAllToppings);
router.get("/productos/toppings/frutas", getAllFrutas);
router.get("/productos/toppings/secos", getAllSecos);

module.exports = router;
