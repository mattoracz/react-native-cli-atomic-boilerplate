import React from 'react';
import { render } from '@testing-library/react-native';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <TextInput testID="input" placeholder="Primary Input" />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should render input', () => {
    const component = <TextInput testID="input" placeholder="Primary Input" />;
    const { getByTestId } = render(component);
    const input = getByTestId('input');
    expect(input).toBeDefined();
  });

  it('sets props', () => {
    const testID = 'input';
    const placeHolder = 'input placeholder';
    const keyboardType = 'email-address';

    const { getByTestId } = render(
      <TextInput
        testID="input"
        placeholder={placeHolder}
        keyboardType={keyboardType}
      />,
    );

    const textInput = getByTestId(testID);
    expect(textInput.props.placeholder).toEqual(placeHolder);
    expect(textInput.props.keyboardType).toEqual(keyboardType);
  });
});
