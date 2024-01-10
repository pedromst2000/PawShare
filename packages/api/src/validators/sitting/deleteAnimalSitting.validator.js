const { param } = require("express-validator");

/**
 * Returns an array of validation rules for the delete sitting endpoint.
 * @returns {Array} An array of validation rules
 */

function validator() {
	return [param("id").isInt({ min: 1 }).withMessage("Invalid sitting id")];
}

module.exports = validator;
