import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import LoginScreen from './LoginScreen';
import { ScreenName } from 'screens/ScreenName';

const mockNavigate = jest.fn();
const mockResetNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: (): { navigate: () => void; reset: () => void } => ({
    navigate: mockNavigate,
    reset: mockResetNavigate,
  }),
}));

describe('LoginScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockNavigate.mockClear();
  });

  it('should render correctly', () => {
    const screen = render(<LoginScreen />);
    expect(screen).toMatchSnapshot();
  });

  it('should call the provided onSubmitButton function when pressed', async () => {
    const screen = <LoginScreen />;
    const wrapper = render(screen);

    fireEvent(wrapper.getByTestId('submit-button'), 'onPress');
    await act(async () =>
      waitFor(() =>
        expect(mockNavigate).toBeCalledWith(ScreenName.ProfileScreen, {
          id: 0,
          firstName: 'Jon',
          lastName: 'Doe',
        }),
      ),
    );
  });

  it('should call the provided onClick function when pressed', async () => {
    const screen = <LoginScreen />;
    const wrapper = render(screen);

    fireEvent(wrapper.getByTestId('registration-label'), 'onPress');
    await act(async () =>
      waitFor(() =>
        expect(mockNavigate).toBeCalledWith(ScreenName.RegisterScreen),
      ),
    );
  });
});
