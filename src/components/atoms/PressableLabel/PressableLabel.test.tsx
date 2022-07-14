import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { PressableLabel } from './PressableLabel';

describe('PressableLabel', () => {
  const spyOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <PressableLabel onPress={() => {}}>
        Primary PressableLabel
      </PressableLabel>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should render Pressable Label', () => {
    const component = (
      <PressableLabel testID="pressable-label" onPress={spyOnPress}>
        Primary PressableLabel
      </PressableLabel>
    );
    const { getByTestId } = render(component);
    const button = getByTestId('pressable-label');
    expect(button).toBeDefined();
  });

  it('should call the provided onPress function when pressed', () => {
    const component = (
      <PressableLabel testID="pressable-label" onPress={spyOnPress}>
        Primary PressableLabel
      </PressableLabel>
    );
    const wrapper = render(component);

    fireEvent(wrapper.getByTestId('pressable-label'), 'onPress');
    expect(spyOnPress).toHaveBeenCalledTimes(1);
  });

  it('should render text correctly', () => {
    const component = (
      <PressableLabel testID="pressable-label" onPress={spyOnPress}>
        Primary PressableLabel
      </PressableLabel>
    );
    const { getByText } = render(component);
    expect(getByText('Primary PressableLabel')).toBeDefined();
  });
});
