import React from 'react';
import { render } from '@testing-library/react-native';
import { ProfileTemplate } from './ProfileTemplate';

describe('ProfileTemplate', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <ProfileTemplate title={'Profile title'} onClickLogoutLabel={() => {}} />,
    );

    expect(tree).toMatchSnapshot();
  });
});
