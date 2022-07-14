import { PressableLabel } from 'components/atoms';
import React from 'react';

import { Footer, HeaderBox, LogoutBox } from '../../organisms';

interface ProfileTemplateProps {
  onClickLogoutLabel: () => void;
  title: string;
}

export const ProfileTemplate: React.FC<ProfileTemplateProps> = props => {
  return (
    <>
      <HeaderBox>{props.title}</HeaderBox>
      <LogoutBox onPressLogout={props.onClickLogoutLabel}>Logout</LogoutBox>
      <Footer />
    </>
  );
};
