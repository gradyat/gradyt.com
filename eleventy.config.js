import htmlmin from "html-minifier-terser";
import CleanCSS from "clean-css";
import favicons from "eleventy-plugin-gen-favicons";
import jsonmin from "jsonminify";

export default async function(eleventyConfig) {
	eleventyConfig.addPlugin(favicons, {})

	if (process.env.ELEVENTY_RUN_MODE === "build") {
		eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
			if (outputPath && outputPath.endsWith(".html")) {
				let minified = htmlmin.minify(content, {
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					removeComments: true,
					sortAttributes: true
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

		eleventyConfig.addTransform("jsonmin", function (json, outputPath) {
			if (outputPath && outputPath.endsWith(".webmanifest")) {
				return new jsonmin(json);
			};
			return json;
		});
	};

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
