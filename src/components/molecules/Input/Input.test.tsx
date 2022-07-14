import React from 'react';
import { render } from '@testing-library/react-native';
import { Input } from './Input';

describe('TextInput', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(<Input testID="input" label="Primary Input" />);
    expect(tree).toMatchSnapshot();
  });

  it('should render input', () => {
    const component = <Input testID="input" label="Primary Input" />;
    const { getByTestId } = render(component);
    const input = getByTestId('input');
    expect(input).toBeDefined();
  });

  it('should render correctly input', () => {
    const testID = 'input';
    const placeHolder = 'input placeholder';
    const keyboardType = 'email-address';

    const { getByTestId } = render(
      <Input testID="input" label={placeHolder} keyboardType={keyboardType} />,
    );

    const textInput = getByTestId(testID);
    expect(textInput.props.placeholder).toEqual(placeHolder);
    expect(textInput.props.keyboardType).toEqual(keyboardType);
  });

  it('should render input label', () => {
    const label = 'Primary Input';
    const component = <Input testID="input" label={label} />;
    const { getByText } = render(component);
    const input = getByText(label);
    expect(input).toBeDefined();
  });
});
