import React from 'react';
import { render } from '@testing-library/react-native';
import { LoginHeader } from './LoginHeader';

describe('LoginHeader', () => {
  const spyOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(<LoginHeader>Login Form title</LoginHeader>);

    expect(tree).toMatchSnapshot();
  });
});
