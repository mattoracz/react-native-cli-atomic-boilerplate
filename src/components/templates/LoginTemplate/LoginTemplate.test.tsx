import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { LoginTemplate } from './LoginTemplate';

describe('LoginTemplate', () => {
  const spyOnSubmitForm = jest.fn();
  const spyOnClickLabel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <LoginTemplate
        title={'Login Form title'}
        onSubmitForm={spyOnSubmitForm}
        onClickLabel={spyOnClickLabel}
      />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should call the provided onSubmitButton function when pressed', () => {
    const component = (
      <LoginTemplate
        title={'Login Form title'}
        onSubmitForm={spyOnSubmitForm}
        onClickLabel={spyOnClickLabel}
      />
    );
    const wrapper = render(component);

    fireEvent(wrapper.getByTestId('submit-button'), 'onPress');
    expect(spyOnSubmitForm).toHaveBeenCalledTimes(1);
  });

  it('should call the provided onClickLabel function when pressed', () => {
    const component = (
      <LoginTemplate
        title={'Login Form title'}
        onSubmitForm={spyOnSubmitForm}
        onClickLabel={spyOnClickLabel}
      />
    );
    const wrapper = render(component);

    fireEvent(wrapper.getByTestId('registration-label'), 'onPress');
    expect(spyOnClickLabel).toHaveBeenCalledTimes(1);
  });
});
