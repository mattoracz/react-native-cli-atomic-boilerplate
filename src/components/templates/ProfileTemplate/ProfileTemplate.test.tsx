import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ProfileTemplate } from './ProfileTemplate';

describe('ProfileTemplate', () => {
  const spyOnClickLabel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const tree = render(
      <ProfileTemplate title={'Profile title'} onClickLogoutLabel={() => {}} />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should call the provided onClickLabel function when pressed', () => {
    const component = (
      <ProfileTemplate
        title={'Profile title'}
        onClickLogoutLabel={spyOnClickLabel}
      />
    );
    const wrapper = render(component);

    fireEvent(wrapper.getByTestId('logout-label'), 'onPress');
    expect(spyOnClickLabel).toHaveBeenCalledTimes(1);
  });
});
