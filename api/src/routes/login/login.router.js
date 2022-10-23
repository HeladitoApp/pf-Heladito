const { Router } = require('express');
const { publicAccess, privateAccess, privateAccessVIP } = require('../../controllers/login/access.login');
const { checkJwt, checkScopes } = require('../../middlewares/authorizationMiddleware');
const { permisionChecker } = require('../../middlewares/permisionChecker');
const { verifyJwt } = require('../../middlewares/verifyJwt');
const { AdminPermissions } = require('../../validators/permissions/admin');

const loginRouter = Router();

loginRouter.get('/public', publicAccess)
loginRouter.get('/private', verifyJwt, privateAccess)
loginRouter.get('/vip', verifyJwt, permisionChecker(AdminPermissions.Create), privateAccessVIP)



module.exports = loginRouter;