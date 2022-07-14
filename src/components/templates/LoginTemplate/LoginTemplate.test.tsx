import React from 'react';
import { render } from '@testing-library/react-native';
import { LoginTemplate } from './LoginTemplate';

describe('LoginTemplate', () => {
  const spyOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <LoginTemplate
        title={'Login Form title'}
        onSubmitForm={() => {}}
        onClickLabel={() => {}}
      />,
    );

    expect(tree).toMatchSnapshot();
  });
});
