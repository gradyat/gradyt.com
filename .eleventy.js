const htmlmin = require("html-minifier");

const date = new Date();

module.exports = function (eleventyConfig) {

	eleventyConfig.addGlobalData("currentYear", function () {
		return date.getFullYear();
	});

	eleventyConfig.addGlobalData("currentDate", function () {
		return date.toISOString().substring(0, 10).replaceAll("-", "/");
	});

	eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
		if (outputPath && outputPath.endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true
			});
			return minified;
		};
		return content;
	});

	eleventyConfig.addPassthroughCopy("CNAME");
	eleventyConfig.addPassthroughCopy(".nojekyll");
	eleventyConfig.addPassthroughCopy("src/styles");

	eleventyConfig.setServerOptions({
		showAllHosts: true
	});

	return {
		htmlTemplateEngine: "njk",
		mdTemplateEngine: "njk",
		dir: {
			input: "src"
		}
	};
};
