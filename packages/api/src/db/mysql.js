const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");
const models = require("../models");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle,
	},
	logging: false,
});

const mysql = { sequelize, ...models.init(sequelize) };

// Sync all the models (create the tables and add the foreign keys)
mysql.sequelize.sync({ alter: true });
// mysql.sequelize.sync({ force: true }); // HARD RESET (DROP ALL TABLES)

module.exports = mysql;
