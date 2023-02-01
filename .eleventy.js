module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/")
  eleventyConfig.addPassthroughCopy("src/scripts/")
  eleventyConfig.addPassthroughCopy("src/data/")

  return {
    dir: {
      input: "src/",
      output: 'dist'
    }
  }
}