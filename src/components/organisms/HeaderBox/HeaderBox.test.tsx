import React from 'react';
import { render } from '@testing-library/react-native';
import { HeaderBox } from './HeaderBox';

describe('HeaderBox', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(<HeaderBox>Header Box title</HeaderBox>);

    expect(tree).toMatchSnapshot();
  });
});
