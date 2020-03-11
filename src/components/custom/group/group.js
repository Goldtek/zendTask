import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

// eslint-disable-next-line import/prefer-default-export
const Group = ({ title, number, iconName }) => (
  <View style={styles.tabColumn}>
    <Icon size={16} name={iconName} style={[styles.iconColor, styles.iconPosition]} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.followNo}>{number}</Text>
  </View>
);

export default Group;
