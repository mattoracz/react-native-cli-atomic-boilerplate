import React from 'react';

import { StackNativeScreenProps } from '../../App';
import { ProfileTemplate } from 'components/templates';

type ProfileScreenProps = StackNativeScreenProps<'ProfileScreen'>;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route, navigation }) => {
  const onClickLogoutLabel = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <ProfileTemplate
      onClickLogoutLabel={onClickLogoutLabel}
      title={`Hi ${route.params.firstName} 👋 you are logged in`}
    />
  );
};

export default ProfileScreen;
