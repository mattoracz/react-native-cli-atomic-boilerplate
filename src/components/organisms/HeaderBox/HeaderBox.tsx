import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { Header } from '../../molecules';
import { styles } from './HeaderBox.style';

interface HeaderBoxProps {
  children: ReactNode;
}

export const HeaderBox: React.FC<HeaderBoxProps> = props => {
  return (
    <View style={styles.container}>
      <Header>{props.children}</Header>
    </View>
  );
};
