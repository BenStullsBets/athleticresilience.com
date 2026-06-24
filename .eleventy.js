module.exports = function (eleventyConfig) {
  // The whole site is static HTML/CSS/JS — copy it verbatim into _site/.
  const passthrough = [
    "styles.css", "script.js", "fonts", "images", "media",
    "index.html", "about", "store", "blog", "404.html",
    "_headers", "robots.txt", "sitemap.xml", "llms.txt", "site.webmanifest",
    "favicon.svg",
    // TODO: add raster assets once designed — "favicon.png", "apple-touch-icon.png", "og-image.png"
  ];
  passthrough.forEach((p) => eleventyConfig.addPassthroughCopy(p));

  return {
    dir: { input: ".", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
