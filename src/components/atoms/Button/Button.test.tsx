import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button';

describe('Button', () => {
  const spyOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(<Button text="Primary Button" onPress={spyOnPress} />);

    expect(tree).toMatchSnapshot();
  });

  it('should call the provided onPress function when pressed', () => {
    const component = <Button text="Primary Button" onPress={spyOnPress} />;
    const wrapper = render(component);

    fireEvent(wrapper.getByTestId('button'), 'onPress');
    expect(spyOnPress).toHaveBeenCalledTimes(1);
  });
});
