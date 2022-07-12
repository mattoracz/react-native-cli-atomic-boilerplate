import React from 'react';
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StackNativeScreenProps } from '../../App';

type ProfileScreenProps = StackNativeScreenProps<'ProfileScreen'>;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>ProfileScreen</Text>
      <Text>Id: {route.params.id}</Text>
      <Text>Firstname: {route.params.firstName}</Text>
      <Text>Lastname: {route.params.lastName}</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
