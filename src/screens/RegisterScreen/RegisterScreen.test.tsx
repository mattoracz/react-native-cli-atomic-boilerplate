import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import RegisterScreen from './RegisterScreen';
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

describe('RegisterScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const screen = render(<RegisterScreen />);
    expect(screen).toMatchSnapshot();
  });

  it('should call the provided onSubmitButton function when pressed', async () => {
    const screen = <RegisterScreen />;
    const wrapper = render(screen);

    fireEvent(wrapper.getByTestId('submit-button'), 'onPress');
    await act(
      async () =>
        await waitFor(() =>
          expect(mockNavigate).toBeCalledWith(ScreenName.ProfileScreen, {
            id: 0,
            firstName: 'Jon',
            lastName: 'Doe',
          }),
        ),
    );
  });

  it('should call the provided onClick function when pressed', async () => {
    const screen = <RegisterScreen />;
    const wrapper = render(screen);

    fireEvent(wrapper.getByTestId('login-label'), 'onPress');
    await act(
      async () =>
        await waitFor(() =>
          expect(mockNavigate).toBeCalledWith(ScreenName.LoginScreen),
        ),
    );
  });
});
