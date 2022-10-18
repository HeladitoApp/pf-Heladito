const { Router } = require("express");
const { getAllProducts } = require("../controllers/allProductosController");
const { getAllSabores } = require("../controllers/allSaboresController");
const { getAllToppings } = require("../controllers/allToppingsController");
const { getAllFrutas } = require("../controllers/allFrutasController");
const { getAllSecos } = require("../controllers/allSecosController");
const { getAllHelados } = require("../controllers/allHeladosController");
const { getAllCombos } = require("../controllers/allCombosController");
const { getById } = require("../controllers/productosByIdController");
const {
  postProductosController,
} = require("../controllers/postProductosController");
const { postExtraController } = require("../controllers/postExtrasController");
const {
  postUsuariosController,
} = require("../controllers/postUsuariosController");
const { validateCreate } = require("../validators/users");
const { filterByType } = require("../controllers/fiterByTypeController");
const { getAllCompras } = require("../controllers/allComprasController");
const { getAllUsuarios } = require("../controllers/AllUsuariosController");
const {
  putUsuariosController,
} = require("../controllers/putUsuariosController");
const {
  putProductoController,
} = require("../controllers/putProductosController");
const { putExtraController } = require("../controllers/putExtraController");

const router = Router();
// Rutas:
router.get("/productos", getAllProducts);
router.get("/productos/sabores", getAllSabores);
router.get("/productos/toppings", getAllToppings);
router.get("/productos/toppings/frutas", getAllFrutas);
router.get("/productos/toppings/secos", getAllSecos);
router.get("/productos/helados", getAllHelados);
router.get("/productos/combos", getAllCombos);
router.get("/productos/:id", getById);
router.get("/productos/tipos/:type", filterByType);
router.get("/compras", getAllCompras);

// Rutas del usuario:
router.get("/listaUsuarios", getAllUsuarios);

router.post("/usuarios", validateCreate, postUsuariosController);
router.post("/createProducto", postProductosController);
router.post("/createExtra", postExtraController);

router.put("/actualizarUsuario", putUsuariosController);
router.put("/actualizarProducto", putProductoController);
router.put("/actualizarExtra", putExtraController);

module.exports = router;
