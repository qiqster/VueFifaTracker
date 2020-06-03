const path = require("path");
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, "src/core/")],
        },
        prependData: '@import "@/scss/variables.scss";',
      },
    },
  },
};
