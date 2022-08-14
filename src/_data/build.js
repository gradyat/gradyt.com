const date = new Date();

module.exports = function() {
  return {
    environment: process.env.ENVIRONMENT || "production",
		buildDate: date.toISOString().substring(0, 10).replaceAll("-", "/"),
		buildYear: date.getFullYear()
  };
};
