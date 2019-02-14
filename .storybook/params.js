const req = require.context(
  // '../src/Button',
  '.',
  true,
  // /^.*(?!UI\/).*.story.js|.story.js|.story.jsx|.story.jsx$/,
  /.*.story.js|.story.js|.story.jsx|.story.jsx$/,
);


export default {
  modules: req.keys().map(req),
  options: {
    name: 'LskGeneral',
  },
  info: true,
};

