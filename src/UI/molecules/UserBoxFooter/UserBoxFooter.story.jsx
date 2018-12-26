import React from 'react';
import UserBoxFooter from './UserBoxFooter';

module.exports = ({ storiesOf }) => (
  storiesOf('ui/UserBoxFooter', module)
    .add('default', () => (
      <div style={{ padding: 60, backgroundColor: 'grey' }}>
        <UserBoxFooter />
      </div>
    ))
);