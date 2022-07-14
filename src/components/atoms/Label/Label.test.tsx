import React from 'react';
import { render } from '@testing-library/react-native';
import { Label } from './Label';

describe('Label', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(<Label>Primary Label</Label>);

    expect(tree).toMatchSnapshot();
  });

  it('should render label', () => {
    const component = <Label>Primary Label</Label>;
    const { getByTestId } = render(component);
    const buttonText = getByTestId('label');
    expect(buttonText).toBeDefined();
  });

  it('should render label text correctly', () => {
    const component = <Label>Primary Label</Label>;
    const { getByText } = render(component);
    expect(getByText('Primary Label')).toBeDefined();
  });
});
