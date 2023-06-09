const esbuild = require('esbuild');

module.exports = function(eleventyConfig) {
    // eleventyConfig.setBrowserSyncConfig({
    //   files: './_site/css/**/*.css'
    // });
    eleventyConfig.on('eleventy.before', async() => {
        await esbuild.build({
          entryPoints:['js/index.js'],
          bundle: true,
          minify: true,
          sourcemap: true,
          outfile: '_site/js/bundle.js'})
    });
    
    eleventyConfig.addWatchTarget("./js/");
    eleventyConfig.addWatchTarget("./_site/css/");
    eleventyConfig.addPassthroughCopy("assets/img");
    eleventyConfig.addPassthroughCopy("assets/favicon");
    eleventyConfig.addPassthroughCopy("assets/fonts/FloodStdRegular.otf");
  };