import React from 'react';
import { View, Text } from 'react-native';
import Swipe from 'react-native-swipeable';

import { colors } from '../styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Intro extends React.Component {
  render() {
    return (
      <Swipe
        dotColor="#C5C5C5"
        activeDotColor={colors.primary}
        paginationStyle={{
          bottom: 0,
        }}
      >
        <View>
          <Text> text 1</Text>
        </View>
      </Swipe>
    );
  }
}
