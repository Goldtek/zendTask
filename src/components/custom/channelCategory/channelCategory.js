import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './style';

const Channelcategory = ({
  imagePath, name, message, time,
}) => (
  <View style={styles.row}>
    <View style={styles.leftCol}>
      <Image source={imagePath} style={styles.liveImg} />
    </View>
    <View style={[styles.rightCol, styles.row]}>
      <View style={styles.nameTag}>
        <Text style={styles.title}>
          {name}
        </Text>
        <Text style={styles.subTitle}>
          {message}
        </Text>
      </View>
      <View style={styles.time}>
        <Text style={styles.subTitle}>
          {time}
        </Text>
      </View>
    </View>
  </View>
);

export default Channelcategory;
