import React from 'react';

import { StackNativeScreenProps } from '../../App';
import { RegisterTemplate } from '../../components/templates';

type RegisterScreenProps = StackNativeScreenProps<'RegisterScreen'>;

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
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
    <RegisterTemplate
      title="Register your account"
      onSubmitForm={onSubmitLoginForm}
      onPressLabel={onPressLabel}
    />
  );
};

export default RegisterScreen;
