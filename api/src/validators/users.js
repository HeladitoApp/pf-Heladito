const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");
const Usuarios = require("../models/Usuarios");

const validateCreate = [
  /* check("name")
    .exists()
    .not() //no es vacio
    .isEmpty()
    .withMessage("por favor introduzca un nombre"), */
  /* check("password")
    .exists()
    .withMessage("por favor introduzca una contraseña")
    .isLength({ min: 5, max: 10 })
    .withMessage("debe contener entre 5 y 10 caracteres")
    .matches(/\d/)
    .withMessage("debe contener al menos 1 número")
    .matches(/[A-Z]{1}/)
    .withMessage("debe contener al menos 1 mayúscula"),
  check("rol")
    .exists()
    .custom((value, { req }) => {
      if (value !== "usuario" && value !== "administrador") {
        throw new Error(
          "rol sólo puede definirse como usuario o administrador"
        );
      }
      return true;
    }), */
  check("email")
    /* // To delete leading and triling space
    .trim()
    // Normalizing the email address
    .normalizeEmail()
    // Checking if follow the email
    // address formet or not */
    .isEmail()
    // Custom message
    .withMessage("inserte un mail válido")
    // Custom validation
    // Validate email in use or not

    .custom(async (emailUser) => {
      const existingUser = await Usuarios.find({ email: emailUser });
      if (existingUser.length) {
        throw new Error("El email ya se encuentra en uso");
      }
    }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreate };
