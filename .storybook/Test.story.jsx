import React from 'react';
import { ThemeContext } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import Story from '../src/Story';

const StyledButton = styled('button')`
  background-color: red;
  color: ${p => { console.log('p', p);  return p.theme.colors.primary}};
`

console.log({ThemeContext});

module.exports = function ({ storiesOf, action, knob }) {
  return storiesOf('Test', module)
    .add('with text', () => (
      <Story>
      <button onClick={action('clicked')}>Hello button</button>
      </Story>
    ))
    .add('with some emoji', () => (
      
      <button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></button>
    ))
    .add('styled', () => (
      <Story>
        <StyledButton>
          123
        </StyledButton>

      </Story>
    ))
    .add('styled2', () => (
      <ThemeProvider theme={{ colors: {primary: 'red'}}}>
        <StyledButton>
          123
        </StyledButton>

      </ThemeProvider>
    ));
};
