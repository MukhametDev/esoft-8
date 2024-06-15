/**
 * Validates the user request body for the presence of name, email, and age fields.
 * If any of the fields are missing, it sends a 400 Bad Request response with an error message.
 * Otherwise, it calls the next middleware function.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function.
 * @return {void}
 */
function validateUser(req, res, next) {
    if (!req.body.name || !req.body.email || !req.body.age) {
        return res.status(400).json('Name, email and age are required');
    }
    next();
}

/**
 * Validates the type of the request body fields for name, email, and age.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function.
 * @return {void} Sends a 400 Bad Request response with an error message if any of the fields are not a string or number. Calls the next middleware function otherwise.
 */
function validateTypeUser(req, res, next) {
    if (typeof req.body.name !== 'string' || typeof req.body.email !== 'string' || typeof req.body.age !== 'number') {
        return res.status(400).json('Name, email and age must be string and number');
    }
    next();
}

/**
 * Validates if a given domain is valid.
 *
 * @param {string} domain - The domain to validate.
 * @return {boolean} Returns true if the domain is valid, false otherwise.
 */


module.exports = {
    validateUser,
    validateTypeUser,
}