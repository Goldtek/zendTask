import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  rightCol: {
    paddingTop: 16,
    borderBottomColor: colors.dividerLine,
    borderBottomWidth: 1,
    flex: 5
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.darkBlack,
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 10,
    color: colors.lightBlack,
  },
  nameTag: {
    flex: 5,
  },
  time: {
    flex: 1,
  },
  liveImg: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    alignSelf: 'center',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
  },
  leftCol: {
    padding: 8,
    flex: 1,
  },
});
