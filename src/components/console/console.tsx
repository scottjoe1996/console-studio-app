import { CSSProperties, FC } from 'react';

import screenBackgroundSvg from './screen-background.svg';
import screenOverlay from './screen-overlay.svg';

interface ConsoleProps {
  size: number;
}

export const Console: FC<ConsoleProps> = ({ size }) => {
  const commonScreenStyling: CSSProperties = {
    width: size,
    height: size,
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
      }}
    >
      <div
        style={{
          padding: '4.5% 7%',
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
      </div>
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
