const { check } = require('express-validator') 
const { validateResult } = require('../helpers/validateHelper')
const Usuarios = require('../models/Usuarios')

const validateCreate = [ 
    check('name')
        .exists()
        .not()      //no es vacio
        .isEmpty(),
    check('password')
        .exists()
        .isLength({ min: 5, max:10 } ),
    check('rol')
        .exists(),
        //.custom(),
    check('activo')
        .exists(),
      check('mail')
       // To delete leading and triling space
       .trim()
  
       // Normalizing the email address
       .normalizeEmail()
 
       // Checking if follow the email 
       // address formet or not
       .isEmail()
 
       // Custom message
       .withMessage('Invalid email')
 
       // Custom validation
       // Validate email in use or not
       
      .custom(async (emailUser)  => {
        
           const existingUser = 
               await Usuarios.find({ mail: emailUser })  
           if (existingUser.length) {
                throw new Error('Email already in use') 
           } 
       }),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }

