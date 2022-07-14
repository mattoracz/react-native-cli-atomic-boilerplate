import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  const spyOnSubmit = jest.fn();
  const spyOnClickLabel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <LoginForm
        onClickLabel={spyOnClickLabel}
        onSubmit={spyOnSubmit}
        title={'Login Form title'}
      />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should call the provided onSubmit function when pressed', () => {
    const component = (
      <LoginForm
        onClickLabel={spyOnClickLabel}
        onSubmit={spyOnSubmit}
        title={'Login Form title'}
      />
    );
    const wrapper = render(component);

    fireEvent(wrapper.getByTestId('submit-input'), 'onPress');
    expect(spyOnSubmit).toHaveBeenCalledTimes(1);
  });

  it('should call the provided onClickLabel function when pressed', () => {
    const component = (
      <LoginForm
        onClickLabel={spyOnClickLabel}
        onSubmit={spyOnSubmit}
        title={'Login Form title'}
      />
    );
    const wrapper = render(component);

    fireEvent(wrapper.getByTestId('registration-label'), 'onPress');
    expect(spyOnClickLabel).toHaveBeenCalledTimes(1);
  });
});
