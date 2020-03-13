import React from 'react';
import {
  View, Text, Image, TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from 'react-native-star-rating';

import pp from '../../../assets/images/profile/me.jpg';

import styles from './styles';

const UserInfo = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Image source={pp} style={styles.profileImg} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
    <View style={[styles.row, styles.top]}>
      <Text>{item.primary_skill}</Text>
    </View>
    {/* add rating icons here */}
    <View style={styles.row}>
      <StarRating
        disabled={false}
        emptyStar="ios-star-outline"
        fullStar="ios-star"
        halfStar="ios-star-half"
        iconSet="Ionicons"
        maxStars={5}
        rating={item.rating}
        starSize={20}
       // selectedStar={(rating) => this.onStarRatingPress(rating)}
        fullStarColor="gold"
      />
    </View>
    <View style={[styles.row, styles.top, { justifyContent: 'space-between' }]}>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}> View Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.IconButton, styles.referBackground]} activeOpacity={0.7}>
        <Icon name="account-arrow-right" size={16} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.IconButton, styles.likeBackground]} activeOpacity={0.7}>
        <Icon name="heart" size={16} style={styles.icon} />
      </TouchableOpacity>
    </View>
  </View>
);

export default UserInfo;
