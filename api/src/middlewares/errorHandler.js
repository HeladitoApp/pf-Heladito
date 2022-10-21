const errorHandler = (error, req, res, next) => {
    if (
        error &&
        error.status &&
        error.status === 401 &&
        error.code &&
        error.code === "credentials_required"
    ) {
        res.status(error.status).json({ message: "Identifícate Primero" });

        return;
    }

    if (error && error.status && error.status === 401) {
        res.status(error.status).json({ message: "La pifiaste con las credenciales" });

        return;
    }

    if (error && error.statusCode && error.statusCode === 403) {
        res.status(error.statusCode).json({ message: "Acceso Denegado al Backstage" });

        return;
    }

    const status = error.statusCode || error.code || 500;
    const message = error.message || "Error interno del servidor";

    res.status(status).json({ message });
};

module.exports = {
    errorHandler,
};
