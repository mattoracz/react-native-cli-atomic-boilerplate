import { PressableLabel } from 'components/atoms';
import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { styles } from './LogoutBox.style';

interface LogoutBoxProps {
  children: ReactNode;
  onPressLogout: () => void;
  testID: string;
}

export const LogoutBox: React.FC<LogoutBoxProps> = props => {
  return (
    <View style={styles.container}>
      <PressableLabel onPress={props.onPressLogout} testID={props.testID}>
        {props.children}
      </PressableLabel>
    </View>
  );
};
