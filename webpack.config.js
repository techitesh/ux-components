const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "wne",
    projectName: "ux-component-library",
    webpackConfigEnv,
    argv,
  });

  return webpackMerge.smart(defaultConfig, {
    devServer: {
      port: 9001,
    },
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          loader: "file-loader",
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
