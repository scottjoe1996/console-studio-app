import { CSSProperties, FC } from 'react';

import screenBackgroundSvg from './screen-background.svg';
import screenOverlay from './screen-overlay.svg';
import { ConsoleInput } from './console-input';

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
        <ConsoleInput />
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
