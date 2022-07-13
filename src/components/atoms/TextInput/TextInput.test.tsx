import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  const spyOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(<TextInput placeholder="Primary Input" />);

    expect(tree).toMatchSnapshot();
  });
});
