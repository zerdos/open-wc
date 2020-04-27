const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('styles.css');
  eleventyConfig.addPassthroughCopy('**/*.{png,gif}');

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addCollection('section', function (collection) {
    // This works _because_ of our current content. Something like https://github.com/Polymer/lit-html/blob/master/docs/.eleventy.js#L37
    // would be more robust, but there are likely other answers here.
    return collection.getFilteredByTag('section').reverse();
  });

  return {
    dir: { input: './', output: '../_site' },
    passthroughFileCopy: true,
    templateFormats: ['md'],
  };
};
