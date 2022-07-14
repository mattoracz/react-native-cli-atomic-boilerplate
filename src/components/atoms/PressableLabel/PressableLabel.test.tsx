import React from 'react';
import { render } from '@testing-library/react-native';
import { PressableLabel } from './PressableLabel';

describe('PressableLabel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <PressableLabel onPress={() => {}}>
        Primary PressableLabel
      </PressableLabel>,
    );

    expect(tree).toMatchSnapshot();
  });
});
