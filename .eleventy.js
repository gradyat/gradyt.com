const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
	eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
		if (outputPath && outputPath.endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true
			});
			return minified;
		}

		return content;
	});

	eleventyConfig.addPassthroughCopy("CNAME");
	eleventyConfig.addPassthroughCopy(".nojekyll");

	return {
		htmlTemplateEngine: "njk",
		mdTemplateEngine: "njk"
	}
}