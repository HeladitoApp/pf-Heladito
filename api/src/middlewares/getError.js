const getError = (req, res, next) => {
    const error = new Error('No se encontró nada aquí')
    error.status = 404
    next(error)
};

module.exports = { getError }