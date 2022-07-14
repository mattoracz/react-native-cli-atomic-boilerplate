import React from 'react';
import { render } from '@testing-library/react-native';
import { Input } from './Input';

describe('Input', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(<Input label="Primary Input" />);

    expect(tree).toMatchSnapshot();
  });
});
