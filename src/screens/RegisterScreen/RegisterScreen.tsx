import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { StackNativeScreenProps } from '../../App';
import { RegisterTemplate } from '../../components/templates';

type RegisterScreenProps = StackNativeScreenProps<'RegisterScreen'>;

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onSubmitLoginForm = () => {
    navigation.navigate('ProfileScreen', {
      id: 0,
      firstName: 'Jon',
      lastName: 'Doe',
    });
  };

  const onPressLabel = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{ height: '100%' }}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <RegisterTemplate
          title="Register your account"
          onSubmitForm={onSubmitLoginForm}
          onPressLabel={onPressLabel}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
