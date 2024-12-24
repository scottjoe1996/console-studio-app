import { FC } from 'react';

import consoleSvg from './console.svg';

interface ConsoleProps {
  width: string | number;
  height: string | number;
}

export const Console: FC<ConsoleProps> = ({ width, height }) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 8,
        backgroundImage: `url("${consoleSvg}")`,
        backgroundOrigin: 'border-box',
        backgroundRepeat: 'no-repeat',
        boxSizing: 'border-box',
        padding: '2% 4%',
      }}
    >
      <p>hello there!</p>
    </div>
  );
};

export default Console;
