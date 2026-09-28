
function errorHandler(err, req, res, next) {
    console.error("Server error:", err.message);

    if (res.headersSent) {
        return next(err);
    }

    const statusCode = err.status || 500;

    res.status(statusCode).json({
        success: false,
        error: statusCode >= 500
            ? "Something went wrong. Please try again."
            : err.message
    });
}

module.exports = errorHandler;
