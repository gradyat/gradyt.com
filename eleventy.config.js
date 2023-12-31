import htmlmin from "html-minifier";
import CleanCSS from "clean-css";

export default async function(eleventyConfig) {
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

	eleventyConfig.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});

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
