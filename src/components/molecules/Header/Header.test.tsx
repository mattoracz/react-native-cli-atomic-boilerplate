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

  it('should render header', () => {
    const component = <Header>Header Text</Header>;
    const { getByTestId } = render(component);
    const button = getByTestId('header');
    expect(button).toBeDefined();
  });

  it('should render header text', () => {
    const component = <Header>Header Text</Header>;
    const { getByTestId } = render(component);
    const buttonText = getByTestId('header-text');
    expect(buttonText).toBeDefined();
  });
});
