const { check } = require('express-validator') 
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [ 
    check('name')
        .exists()
        .not()      //no es vacio
        .isEmpty(),
    check('password')
        .exists()
        .isLength({ min: 5, max:10 }),
    check('mail')
        .exists()
        .isEmail()
        .normalizeEmail(),
    check('rol')
        .exists(),
        //.custom(),
    check('Activo')
        .exists()
        ,
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }