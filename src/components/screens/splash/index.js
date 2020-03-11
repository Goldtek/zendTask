import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

import styles from './styles';
import { colors } from '../../styles';
import logo from '../../../assets/images/logo.png';

const Splash = () => (
  <View style={styles.container}>
    <Image source={logo} style={styles.logo} />
    <ActivityIndicator size="large" color={colors.primary} />
  </View>
);

export default Splash;
