import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { RegisterForm } from './RegisterForm';

describe('RegisterForm', () => {
  const spyOnSubmit = jest.fn();
  const spyOnClickLabel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <RegisterForm
        onPressLabel={spyOnClickLabel}
        onSubmit={spyOnSubmit}
        title={'Login Form title'}
      />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should call the provided onSubmit function when pressed', () => {
    const component = (
      <RegisterForm
        onPressLabel={spyOnClickLabel}
        onSubmit={spyOnSubmit}
        title={'Login Form title'}
      />
    );
    const wrapper = render(component);

    fireEvent(wrapper.getByTestId('submit-button'), 'onPress');
    expect(spyOnSubmit).toHaveBeenCalledTimes(1);
  });

  it('should call the provided onClickLabel function when pressed', () => {
    const component = (
      <RegisterForm
        onPressLabel={spyOnClickLabel}
        onSubmit={spyOnSubmit}
        title={'Login Form title'}
      />
    );
    const wrapper = render(component);

    fireEvent(wrapper.getByTestId('login-label'), 'onPress');
    expect(spyOnClickLabel).toHaveBeenCalledTimes(1);
  });
});
