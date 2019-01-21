module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": false, "decoratorsBeforeExport": true  }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-function-bind",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-transform-runtime",
    "emotion"
  ]
}
