import React, { Component } from 'react';
import {
  View, Image, Text
} from 'react-native';
import { Toolbar } from 'react-native-material-ui';

import { ChannelCategory } from '../../custom';
import bg from '../../../assets/images/profile/me.jpg';
import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Channel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar />
        <View style={styles.liveBg}>
          <Image source={bg} style={styles.liveImg} />
          <Text style={styles.name}> Chisom</Text>
        </View>
        <ChannelCategory imagePath={bg} message="Good morning" time="3:22" name="Mathew Chiadikaobi" />
        <ChannelCategory imagePath={bg} message="Hello" time="3:30" name="Abaenowa Chinasa" />
        <ChannelCategory imagePath={bg} message="How has it been? :)" time="3:40" name="Mathew Chiadikaobi" />
      </View>
    );
  }
}
