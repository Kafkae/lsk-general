import React from 'react'
import * as storybook from '@storybook/react'
const req = require.context(
  '.',
  // '../src',
  true,
  /.story.js|.story.js|.story.jsx|.story.jsx$/,
);

export default {
  React,
  storybook,
  modules: req.keys().map(req),
  options: {
    name: 'LskGeneral',
  },
  backgrounds: false,
};

