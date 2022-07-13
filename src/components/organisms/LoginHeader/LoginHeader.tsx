import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { Header } from '../../molecules';
import { styles } from './LoginHeader.style';

interface LoginHeaderProps {
  children: ReactNode;
}

export const LoginHeader: React.FC<LoginHeaderProps> = props => {
  return (
    <View style={styles.container}>
      <Header>{props.children}</Header>
    </View>
  );
};
