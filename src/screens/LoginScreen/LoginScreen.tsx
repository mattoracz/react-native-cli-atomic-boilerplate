import React from 'react';
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StackNativeScreenProps } from '../../App';
import { Button } from '../../components/atoms/Button/Button';
import { Input } from '../../components/atoms/Input/Input';

type LoginScreenProps = StackNativeScreenProps<'LoginScreen'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>LoginScreen</Text>
      <Input title="Email" keyboardType="email-address" />
      <Input title="Password" secureTextEntry />
      <Button
        onPress={() =>
          navigation.navigate('ProfileScreen', {
            id: 0,
            firstName: 'Jon',
            lastName: 'Doe',
          })
        }
        text="Go To Profile"
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
