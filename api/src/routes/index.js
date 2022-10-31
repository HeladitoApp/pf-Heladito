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
//const { validateCreate } = require("../validators/users");
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
const { getRankingUsuariosCont } = require("../controllers/rankingUsuariosCont");
const { getProductoMasVend } = require("../controllers/rankingProductosCont");
const { getByMail } = require("../controllers/userByMailController");
const { getCompraByEmail } = require("../controllers/comprasByEmailController");

const { validateCreate } = require("../validators/users");
const { getUsuarioById } = require("../controllers/usuariosByIdController");
const { putFavoritosController } = require("../controllers/putFavoritosUserController");
const { getExtraById } = require("../controllers/extraByIdController");
const { getFavsByEmail } = require("../controllers/favoritosByEmailController");
const { adminInboxController } = require("../controllers/adminInboxController");
const { getAdminInboxController } = require("../controllers/getAdminInbox");
const { postFeedbacksController } = require("../controllers/postFeedbacksController");
const { getFeedbacksController } = require("../controllers/getFeedbacksController");
const { putFeedbackController } = require("../controllers/putFeedbackController");



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
router.get("/tipos", getAllTiposController);

router.post("/createProducto", postProductosController);
router.post("/createExtra", postExtraController);

router.put("/actualizarProducto", putProductoController);
router.put("/actualizarExtra", putExtraController);

//Rutas de COMPRAS:
router.get("/compras", getAllCompras);
router.get("/rankingProductos", getProductoMasVend)
router.get("/comprasCliente/:email", getCompraByEmail);
router.post("/addCompras", postCompraController);

// Rutas del USUARIO:
router.get("/listaUsuarios", getAllUsuarios);
router.get("/rankingUsuarios", getRankingUsuariosCont)

router.get('/usuario/:id', getUsuarioById)

router.get("/usuarioEmail/:email", getByMail);

router.post("/usuarios", validateCreate, postUsuariosController)
router.post("/createProducto", postProductosController);
router.post("/createExtra", postExtraController);
router.post("/adminInbox", adminInboxController);
router.get("/allInboxAdmin", getAdminInboxController);
router.post("/feedback", postFeedbacksController);
router.get("/allFeedbacks", getFeedbacksController);
router.put("/actualizarFeedback", putFeedbackController);

router.get("/usuarioEmail", getByMail);

router.put("/actualizarUsuario", putUsuariosController);
router.put("/actualizarFavoritos", putFavoritosController)
router.get("/favoritoscliente/:email", getFavsByEmail);
//Rutas de Login
router.use("/login", loginRouter);

const PaymentController = require("../controllers/PaymentsController");
const PaymentService = require("../services/PaymensServices");
const { postEmailsController } = require("../controllers/postEmailsController");
const { reporteCompras } = require("../controllers/reporteComprasController");
const { resultadoCompras } = require("../controllers/resultadoComprasController");
const { GeneraComprobante } = require("../utils/GeneraComprobante");



//Rutas de compras 

const PaymentInstance = new PaymentController(new PaymentService());
router.post("/payment", function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res);
});
router.get("/payment/failure", resultadoCompras);
router.get("/payment/pending", resultadoCompras);
router.get("/payment/success", resultadoCompras);
router.get("/GeneraComprobante",GeneraComprobante)


//Rutas de Extras
router.get("/extras/:id", getExtraById)



//ruta nodemail
router.post("/sendEmail", postEmailsController)


//Reportes de admin
router.get("/reportes/compras", reporteCompras)

module.exports = router;
