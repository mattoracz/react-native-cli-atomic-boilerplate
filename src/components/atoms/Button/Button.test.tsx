import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button';

describe('BackButton', () => {
  const spyOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(<Button text="Primary Button" onPress={spyOnPress} />);

    expect(tree).toMatchSnapshot();
  });

  // Note the below test checks the pressed state but this doesn't give
  // branch coverage of the pressed style change. Open question here:
  // https://stackoverflow.com/questions/64452964/testing-the-pressed-state-of-a-pressable
  it('should call the provided onPress function when pressed', () => {
    const component = <Button text="Primary Button" onPress={spyOnPress} />;

    const wrapper = render(component);

    fireEvent(wrapper.getByTestId('Button'), 'onPress');
    expect(spyOnPress).toHaveBeenCalledTimes(1);
  });
});
