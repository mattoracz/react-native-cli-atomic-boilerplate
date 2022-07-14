import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { LogoutBox } from './LogoutBox';

describe('LogoutBox', () => {
  const spyOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <LogoutBox onPressLogout={spyOnPress} testID="logout-label">
        Logout Box title
      </LogoutBox>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should call the provided onPress function when pressed', () => {
    const component = (
      <LogoutBox onPressLogout={spyOnPress} testID="logout-label">
        Logout Box title
      </LogoutBox>
    );
    const wrapper = render(component);

    fireEvent(wrapper.getByTestId('logout-label'), 'onPress');
    expect(spyOnPress).toHaveBeenCalledTimes(1);
  });
});
