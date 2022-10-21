const { Router } = require('express');
const { publicAccess, privateAccess, privateAccessVIP } = require('../../controllers/login/access.login');
const { checkJwt, checkScopes } = require('../../middlewares/authorizationMiddleware');

const loginRouter = Router();

loginRouter.get('/public', publicAccess)
loginRouter.get('/private', checkJwt, privateAccess)
loginRouter.get('/private/vip', checkJwt, checkScopes, privateAccessVIP)



module.exports = loginRouter;