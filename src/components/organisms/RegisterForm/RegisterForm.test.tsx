import React from 'react';
import { render } from '@testing-library/react-native';
import { RegisterForm } from './RegisterForm';

describe('RegisterForm', () => {
  const spyOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <RegisterForm
        onPressLabel={() => {}}
        onSubmit={() => {}}
        title={'Login Form title'}
      />,
    );

    expect(tree).toMatchSnapshot();
  });
});
