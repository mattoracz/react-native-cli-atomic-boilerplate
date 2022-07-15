import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { ProfileTemplate } from 'components/templates';
import { RootStackParamList } from 'App';
import { ScreenName } from 'screens/ScreenName';
import { useNavigation } from '@react-navigation/native';

type ProfileScreenProps = {
  route: { params: { firstName: string; id: number; lastName: string } };
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onClickLogoutLabel = () => {
    navigation.navigate(ScreenName.LoginScreen);
  };

  return (
    <ProfileTemplate
      onClickLogoutLabel={onClickLogoutLabel}
      title={`Hi ${route.params.firstName} 👋 you are logged in`}
    />
  );
};

export default ProfileScreen;
