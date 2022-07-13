import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { styles } from './Header.style';

export interface HeaderProps {
  children: ReactNode;
}

export const Header: React.FC<HeaderProps> = props => {
  return (
    <View style={styles.headerContainer} testID="header">
      <Text style={styles.headerText} testID="header-text">
        {props.children}
      </Text>
    </View>
  );
};
