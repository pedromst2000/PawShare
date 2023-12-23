const getSittingsFeed = require("./getSittingsFeed.controller");
const getRequestedSittings = require("./getRequestedSittings.controller");
const getSittingDetail = require("./getSittingDetail.controller");
const addAnimalSitting = require("./addAnimalSitting.controller");

module.exports = {
	getSittingsFeed,
	getRequestedSittings,
	getSittingDetail,
	addAnimalSitting,
};
