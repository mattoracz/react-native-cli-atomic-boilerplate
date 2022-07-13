import React from 'react';
import { render } from '@testing-library/react-native';
import { LoginFooter } from './LoginFooter';

describe('LoginFooter', () => {
  const spyOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(<LoginFooter />);

    expect(tree).toMatchSnapshot();
  });
});
