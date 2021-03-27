module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  plugins: [
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    "@babel/plugin-transform-runtime",
  ],
};
