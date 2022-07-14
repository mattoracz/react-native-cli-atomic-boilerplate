import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button';

describe('Button', () => {
  const spyOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(<Button text="Button Text" onPress={spyOnPress} />);

    expect(tree).toMatchSnapshot();
  });

  it('should call the provided onPress function when pressed', () => {
    const component = <Button text="Button Text" onPress={spyOnPress} />;
    const wrapper = render(component);

    fireEvent(wrapper.getByTestId('button'), 'onPress');
    expect(spyOnPress).toHaveBeenCalledTimes(1);
  });

  it('should render button', () => {
    const component = <Button text="Button Text" onPress={spyOnPress} />;
    const { getByTestId } = render(component);
    const button = getByTestId('button');
    expect(button).toBeDefined();
  });

  it('should render button text', () => {
    const component = <Button text="Button Text" onPress={spyOnPress} />;
    const { getByTestId } = render(component);
    const buttonText = getByTestId('button-text');
    expect(buttonText).toBeDefined();
  });

  it('should render title correctly', () => {
    const component = <Button text="Button Text" onPress={spyOnPress} />;
    const { getByText } = render(component);
    expect(getByText('Button Text')).toBeDefined();
  });
});
