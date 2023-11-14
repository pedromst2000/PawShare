const fs = require("fs");
const YAML = require("yaml");
const routeDocs = require("../data/docs/routes/");

const info = YAML.parse(fs.readFileSync("./src/data/docs/info.yml", "utf8"));

/** @type {import("swagger-jsdoc").SwaggerDefinition} */
const swaggerDefinition = {
	openapi: "3.0.1",
	info,
	servers: [{ url: "http://localhost:5000/api/v1" }],
	paths: {
		"/": { get: routeDocs.default.getHelloWorld },
		"/{any*}": { get: routeDocs.default.notFound },
		"/cronjob/unverified-users": { delete: routeDocs.cronjob.deleteUnverifiedUsers },
		"/auth/login": { post: routeDocs.auth.postLogin },
		"/auth/register": { post: routeDocs.auth.postRegister },
		"/auth/request-reset-password": { post: routeDocs.auth.postRequestResetPassword },
		"/auth/reset-password/{token}": { patch: routeDocs.auth.patchResetPassword },
		"/users/verify/{token}": { patch: routeDocs.users.patchVerifyUser },
		"/users/me": { get: routeDocs.users.getLoggedUser },
	},
};

module.exports = swaggerDefinition;