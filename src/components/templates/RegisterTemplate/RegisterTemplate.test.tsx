import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { RegisterTemplate } from './RegisterTemplate';

describe('RegisterTemplate', () => {
  const spyOnSubmitForm = jest.fn();
  const spyOnClickLabel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <RegisterTemplate
        title={'Register Form title'}
        onSubmitForm={spyOnSubmitForm}
        onPressLabel={spyOnClickLabel}
      />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should call the provided onSubmitButton function when pressed', () => {
    const component = (
      <RegisterTemplate
        title={'Register Form title'}
        onSubmitForm={spyOnSubmitForm}
        onPressLabel={spyOnClickLabel}
      />
    );
    const wrapper = render(component);

    fireEvent(wrapper.getByTestId('submit-button'), 'onPress');
    expect(spyOnSubmitForm).toHaveBeenCalledTimes(1);
  });

  it('should call the provided onClickLabel function when pressed', () => {
    const component = (
      <RegisterTemplate
        title={'Register Form title'}
        onSubmitForm={spyOnSubmitForm}
        onPressLabel={spyOnClickLabel}
      />
    );
    const wrapper = render(component);

    fireEvent(wrapper.getByTestId('login-label'), 'onPress');
    expect(spyOnClickLabel).toHaveBeenCalledTimes(1);
  });
});
