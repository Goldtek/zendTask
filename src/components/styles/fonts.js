import { Platform } from 'react-native';

const webFont = {
  regular: 'Roboto',
  bold: 'Roboto',
  medium: 'Roboto',
  light: 'Roboto',
};

const iosFont = {
  regular: 'Avenir-Medium',
  bold: 'Avenir-Heavy',
  semiBold: 'Avenir-Black',
  medium: 'Avenir-Medium',
  light: 'Avenir-Light',
};

export default {
  ...Platform.select({
    android: {
      fontFamily: iosFont,
    },
    ios: {
      fontFamily: iosFont,
    },
    web: {
      fontFamily: webFont,
    },
  }),
  fontSize: {
    titleFontSize: 20,
    bigTitle: 20,
    text: 14,
    titleText: 16,
    bigButtonText: 18,
    buttonText: 14,
    small: 12,
  },
};
