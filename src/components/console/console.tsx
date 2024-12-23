import { FC } from 'react';

import consoleSvg from './console.svg';

export const Console: FC = () => {
  return (
    <div
      style={{
        width: 500,
        height: 500,
        borderRadius: 5,
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
