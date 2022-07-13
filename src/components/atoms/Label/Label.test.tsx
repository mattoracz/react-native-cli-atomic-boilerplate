import React from 'react';
import { render } from '@testing-library/react-native';
import { Label } from './Label';

describe('Label', () => {
  const spyOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(<Label>Primary Label</Label>);

    expect(tree).toMatchSnapshot();
  });
});
