const config = require('../tools/webpack.config')[0];
config.module.rules[0].options = require('../babel.config.js');
module.exports = config;
