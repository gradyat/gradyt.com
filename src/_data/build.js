const { DateTime } = require("luxon");

const dateTime = DateTime.now().setZone('America/Los_Angeles');

module.exports = function() {
  return {
    environment: process.env.ENVIRONMENT || "production",
		buildDate: dateTime.toLocaleString(),
		buildYear: dateTime.toFormat('y')
  };
};
