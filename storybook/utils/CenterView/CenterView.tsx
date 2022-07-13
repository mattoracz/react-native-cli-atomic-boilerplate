import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { styles } from './CenterView.style';

interface CenterViewProps {
  children: ReactNode;
}

const CenterView: React.FC<CenterViewProps> = ({ children }) => {
  return <View style={styles.main}>{children}</View>;
};

export default CenterView;
