import React from 'react';
import { render } from '@testing-library/react-native';
import { Header } from './Header';

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(<Header>Header Text</Header>);

    expect(tree).toMatchSnapshot();
  });
});
