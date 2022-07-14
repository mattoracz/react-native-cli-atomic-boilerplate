import { PressableLabel } from 'components/atoms';
import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { Header } from '../../molecules';
import { styles } from './LogoutBox.style';

interface LogoutBoxProps {
  children: ReactNode;
  onPressLogout: () => void;
}

export const LogoutBox: React.FC<LogoutBoxProps> = props => {
  return (
    <View style={styles.container}>
      <PressableLabel onPress={props.onPressLogout}>
        {props.children}
      </PressableLabel>
    </View>
  );
};
