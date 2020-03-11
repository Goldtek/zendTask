import React, { Component } from 'react';
import {
  View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import bg from '../../../assets/images/sidemenu/Group-17-Copy.png';
import me from '../../../assets/images/profile/me.jpg';
import styles from './style';
import { Group, Timeline } from '../../custom';

// eslint-disable-next-line react/prefer-stateless-function
export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.profileBG} source={bg}>
          <Image source={me} style={styles.profileImg} />
          <Text style={styles.profileText}>onwuegbuzie chisom dike</Text>
          <TouchableOpacity activeOpacity={0.83} style={styles.followButton}>
            <View style={styles.row}>
              <Icon size={16} name="account-plus" style={styles.iconColor} />
              <Text style={styles.followText}> Follow </Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
        <View style={[styles.row, styles.space]}>
          <Group title="friends" number="1000" iconName="account-group" />
          <View style={styles.verticalLine} />
          <Group title="following" number="200" iconName="account-multiple-check" />
          <View style={styles.verticalLine} />
          <Group title="followers" number="800" iconName="account-heart" />
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Timeline key={1} title="Skills" subtitle=" React, React native, PHP, Firebase, cloud functions" />
          <Timeline key={2} title="Domian" subtitle=" Design, Mobile Development" />
          <Timeline key={3} title="Experience" subtitle="UI, UX Designer, Mobile Developer" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
