import React from 'react';
import { render } from '@testing-library/react-native';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <LoginForm
        onClickLabel={() => {}}
        onSubmit={() => {}}
        title={'Login Form title'}
      />,
    );

    expect(tree).toMatchSnapshot();
  });
});
