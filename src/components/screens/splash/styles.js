import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    color: colors.light,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 250,
    width: 250,
  }
});
