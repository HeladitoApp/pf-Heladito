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
const { postExtraController } = require("../controllers/PostExtrasController");

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
const { postCompraController } = require("../controllers/PostCompraController");
const { getAllTiposController } = require("../controllers/allTiposController");

const router = Router();

//Seteo rutas Login
const loginRouter = require("./login/login.router");


// Rutas de PRODUCTOS:
router.get("/productos", getAllProducts);
router.get("/productos/sabores", getAllSabores);
router.get("/productos/toppings", getAllToppings);
router.get("/productos/toppings/frutas", getAllFrutas);
router.get("/productos/toppings/secos", getAllSecos);
router.get("/productos/helados", getAllHelados);
router.get("/productos/combos", getAllCombos);
router.get("/productos/:id", getById);
router.get("/productos/tipos/:type", filterByType);
router.get("/tipos", getAllTiposController)

router.post("/createProducto", postProductosController);
router.post("/createExtra", postExtraController);

router.put("/actualizarProducto", putProductoController);
router.put("/actualizarExtra", putExtraController);

//Rutas de COMPRAS:
router.get("/compras", getAllCompras);

router.post("/addCompras", postCompraController);

// Rutas del USUARIO:
router.get("/listaUsuarios", getAllUsuarios);

router.post("/usuarios", validateCreate, postUsuariosController)
router.post("/createProducto", postProductosController);
router.post("/createExtra", postExtraController);

router.put("/actualizarUsuario", putUsuariosController);

//Rutas de Login
router.use('/login', loginRouter)

module.exports = router;
