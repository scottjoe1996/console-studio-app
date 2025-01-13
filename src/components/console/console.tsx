import { CSSProperties, FC } from 'react';

import screenBackgroundSvg from './screen-background.svg';
import screenOverlay from './screen-overlay.svg';

interface ConsoleProps {
  width: string | number;
  height: string | number;
}

export const Console: FC<ConsoleProps> = ({ width, height }) => {
  const commonScreenStyling: CSSProperties = {
    width,
    height,
    borderRadius: 8,
    backgroundOrigin: 'border-box',
    backgroundRepeat: 'no-repeat',
    boxSizing: 'border-box',
  };

  return (
    <div
      style={{
        ...commonScreenStyling,
        position: 'relative',
        backgroundImage: `url("${screenBackgroundSvg}")`,
        padding: '2% 4%',
      }}
    >
      <p
        style={{
          color: 'white',
          font: '1.3rem Inconsolata, monospace',
          textShadow: '0 0 5px #C8C8C8',
        }}
      >
        hello there!
      </p>
      <div
        style={{
          ...commonScreenStyling,
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundImage: `url("${screenOverlay}")`,
        }}
      />
    </div>
  );
};

export default Console;
