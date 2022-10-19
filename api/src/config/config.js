require('dotenv').config();

const config = {
    audience: process.env.AUDIENCE,
    issuer: process.env.ISSUER,
    algorithms: process.env.ALGORITHMS
}

module.exports = {
    config
}
