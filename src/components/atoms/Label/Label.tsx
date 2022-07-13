import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import { styles } from './Label.style';

interface LabelProps {
  children: ReactNode;
}

export const Label: React.FC<LabelProps> = props => {
  return (
    <Text style={styles.label} testID="label">
      {props.children}
    </Text>
  );
};
