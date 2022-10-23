require('dotenv').config();

const config = {
    audience: process.env.AUDIENCE,
    issuer: `${process.env.ISSUER}/`,
    algorithms: 'RS256',
    jwksUri: `${process.env.ISSUER}/.well-known/jwks.json`
}

module.exports = {
    config
}
