import { render } from '@testing-library/react';
import { ConsoleInput } from './console-input';

describe('ConsoleInput', () => {
  it('should return hello world', () => {
    const { getByText } = render(<ConsoleInput />);

    getByText('hello there!');
  });
});
