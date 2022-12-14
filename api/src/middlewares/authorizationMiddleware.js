const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
const { config } = require('../config/config');

const checkJwt = auth({
    audience: config.audience,
    issuerBaseURL: config.issuer
});

const checkScopes = requiredScopes('create:items')

module.exports = { checkJwt, checkScopes }