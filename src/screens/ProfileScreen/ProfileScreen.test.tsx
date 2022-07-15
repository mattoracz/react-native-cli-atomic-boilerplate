import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import ProfileScreen from './ProfileScreen';
import { ScreenName } from 'screens/ScreenName';

const mockNavigate = jest.fn();
const mockResetNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: (): { navigate: () => void; reset: () => void } => ({
    navigate: mockNavigate,
    reset: mockResetNavigate,
  }),
  useIsFocused: jest.fn(),
}));

describe('ProfileScreen', () => {
  const routerMock = {
    params: { id: 0, firstName: 'Lisa', lastName: 'Doe' },
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const screen = render(<ProfileScreen route={routerMock} />);
    expect(screen).toMatchSnapshot();
  });

  it('should call the provided onSubmitButton function when pressed', async () => {
    const screen = <ProfileScreen route={routerMock} />;
    const wrapper = render(screen);

    fireEvent(wrapper.getByTestId('logout-label'), 'onPress');
    await waitFor(() =>
      expect(mockNavigate).toBeCalledWith(ScreenName.LoginScreen),
    );
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledTimes(1));
  });
});
