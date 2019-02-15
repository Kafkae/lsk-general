const config = require('../tools/webpack.config')[0];
config.module.rules[0].options = require('../babel.config.js');
// console.log(config.module.rules);
module.exports = config;
