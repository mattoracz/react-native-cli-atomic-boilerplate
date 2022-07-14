import React from 'react';
import { render } from '@testing-library/react-native';
import { RegisterTemplate } from './RegisterTemplate';

describe('RegisterTemplate', () => {
  const spyOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <RegisterTemplate
        title={'Register Form title'}
        onSubmitForm={() => {}}
        onPressLabel={() => {}}
      />,
    );

    expect(tree).toMatchSnapshot();
  });
});
