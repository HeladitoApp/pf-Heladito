const jwtAuthz = require('express-jwt-authz');

const permisionChecker = (permissions) => {
    return jwtAuthz([permissions], {
        customScopeKey: 'permissions',
        checkAllScopes: true,
        failWithError: true,
    })
};

module.exports = { permisionChecker }