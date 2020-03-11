// @flow
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
export default class Circle extends Component {
    props: {
        size: number,
        color: string,
        children?: React$Element<*>,
        style?: StyleSheet.Styles | Array<StyleSheet.Styles>
    }

    render(): React$Element<*> {
      const { size, color, style } = this.props;
      const circleStyle = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center'
      };
      // eslint-disable-next-line react/destructuring-assignment
      return <View style={[circleStyle, style]}>{this.props.children}</View>;
    }
}
