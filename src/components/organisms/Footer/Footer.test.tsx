import React from 'react';
import { render } from '@testing-library/react-native';
import { Footer } from './Footer';

describe('Footer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(<Footer />);

    expect(tree).toMatchSnapshot();
  });
});
