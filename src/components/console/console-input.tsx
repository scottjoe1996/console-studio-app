import React from 'react';
import blinkingCaret from './assets/blinking-caret.svg';

export const ConsoleInput: React.FC = () => {
  return (
    <p
      style={{
        color: 'white',
        font: '1.3rem Inconsolata, monospace',
        textShadow: '0 0 5px #C8C8C8',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ paddingRight: '4px' }}>{'> Hello there'}</span>
        <img src={blinkingCaret} height={30} />
      </div>
    </p>
  );
};
