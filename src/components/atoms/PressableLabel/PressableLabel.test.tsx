import React from 'react';
import { render } from '@testing-library/react-native';
import { PressableLabel } from './PressableLabel';

describe('PressableLabel', () => {
  const spyOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <PressableLabel>Primary PressableLabel</PressableLabel>,
    );

    expect(tree).toMatchSnapshot();
  });
});
