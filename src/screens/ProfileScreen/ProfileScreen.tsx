import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { StackNativeScreenProps } from '../../App';
import { ProfileTemplate } from 'components/templates';

type ProfileScreenProps = StackNativeScreenProps<'ProfileScreen'>;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route, navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onClickLogoutLabel = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{ height: '100%' }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ProfileTemplate
          onClickLogoutLabel={onClickLogoutLabel}
          title={`Hi ${route.params.firstName} 👋 you are logged in`}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
