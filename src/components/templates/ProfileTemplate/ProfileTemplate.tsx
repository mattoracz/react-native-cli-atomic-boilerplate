import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { Footer, HeaderBox, LogoutBox } from '../../organisms';
import { styles } from './ProfileTemplate.style';

interface ProfileTemplateProps {
  onClickLogoutLabel: () => void;
  title: string;
}

export const ProfileTemplate: React.FC<ProfileTemplateProps> = props => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <HeaderBox>{props.title}</HeaderBox>
        <LogoutBox
          testID="logout-label"
          onPressLogout={props.onClickLogoutLabel}>
          Logout
        </LogoutBox>
        <Footer />
      </View>
    </SafeAreaView>
  );
};
