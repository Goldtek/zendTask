import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  liveImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignSelf: 'center',
    marginBottom: 4,
  },
  liveBg: {
    alignContent: 'center',
    justifyContent: 'center',
    width: 80,
    padding: 8,
  },
  name: {
    alignSelf: 'center',
    color: colors.iconDark,
    fontSize: 10,
  },
  row: {
    flexDirection: 'row',
  },
});
