const getError = (req, res, next) => {
    const error = new Error('No Encontrado')
    error.status = 404
    next(error)
};

module.exports = { getError }