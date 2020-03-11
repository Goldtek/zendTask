/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-classes-per-file */
// @flow
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import IconMd from 'react-native-vector-icons/MaterialIcons';
import IconMdc from 'react-native-vector-icons/MaterialCommunityIcons';

import { fonts, colors } from '../styles';
import Circle from './Circle';

export default class Timeline extends Component {
  props: {
    date: string,
    title: string,
    subtitle: string,
    collaborators: number[],
    completed?: boolean,
  };

  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    collaborators: [],
  };

  render(): React$Element<*> {
    const {
      title, subtitle, completed, onPress,
    } = this.props;

    const height = 100;
    return (
      <TouchableOpacity
        activeOpacity={0.83}
        onPress={onPress}
      >
        <View style={[style.listItem, { height }]}>
          <TimelineStatus {...{ completed, height }} />
          <View style={style.innerRow}>
            <View style={style.title}>
              {title && <Text style={style.titleText}>{title}</Text>}
              {subtitle && (
                <Text style={style.subtitleText} numberOfLines={1}>
                  {subtitle}
                </Text>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

class TimelineStatus extends Component {
  props: {
    completed?: boolean,
    height: number,
  };

  render(): React$Element<*> {
    const { height } = this.props;
    const borderColor = colors.primary;
    return (
      <View style={[style.doublePadding, style.center]}>
        <View style={[{ height }, style.verticalLine, { borderColor }]} />
        <Circle size={24} color={colors.light}>
          <IconMdc size={24} name="circle" color={colors.primary} />
        </Circle>
      </View>
    );
  }
}

const style = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.listBorderColor,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doublePadding: {
    padding: 16,
  },
  gray: {
    color: colors.gray,
  },
  titleText: {
    color: colors.title,
    fontFamily: fonts.fontFamily.medium,
    fontSize: 16,
    marginBottom: 4,
  },
  subtitleText: {
    fontFamily: fonts.fontFamily.regular,
    color: colors.darkBlack,
    fontSize: 14,
    marginBottom: 4,
  },
  metaText: {
    fontFamily: fonts.fontFamily.light,
    color: colors.grey,
    fontSize: 12,
  },
  avatar: {
    marginTop: colors.contentPadding,
    marginRight: colors.contentPadding,
  },
  verticalLine: {
    borderLeftWidth: 3,
    borderColor: colors.listBorderColor,
    position: 'absolute',
  },
  time: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: colors.contentPadding,
  },
  title: {
    justifyContent: 'center',
    flex: 1,
    paddingRight: colors.contentPadding,
  },
  innerRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
    marginLeft: 16,
  },
  iconRowRight: {
    marginLeft: 8,
    marginRight: 8,
  },
});
