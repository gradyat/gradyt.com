import htmlmin from "html-minifier-terser";
import CleanCSS from "clean-css";

export default async function(eleventyConfig) {
	if (process.env.ELEVENTY_RUN_MODE === "build") {
		eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
			if (outputPath && outputPath.endsWith(".html")) {
				let minified = htmlmin.minify(content, {
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					removeComments: true,
					sortAttributes: true
					// old
				});
				return minified;
			};
			return content;
		});
	
		eleventyConfig.addTransform("cssmin", function (code, outputPath) {
			if (outputPath && outputPath.endsWith(".css")) {
				return new CleanCSS({}).minify(code).styles;
			};
			return code;
		});
	}
	

	eleventyConfig.addPassthroughCopy("src/_headers");
	eleventyConfig.addPassthroughCopy("src/robots.txt");

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
