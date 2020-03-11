import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  profileBG: {
    width,
    height: 200,
    justifyContent: 'center',
    zIndex: 2,

  },
  profileImg: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  profileText: {
    alignSelf: 'center',
    color: colors.light,
    marginTop: 5,
    textTransform: 'capitalize'
  },
  followButton: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    alignSelf: 'center',
    backgroundColor: colors.light,
    borderRadius: 10,
    marginVertical: 10,
  },
  followText: {
    color: colors.primary,
  },
  row: {
    flexDirection: 'row',
  },
  iconColor: {
    color: colors.primary
  },
  space: {
    marginVertical: 20,
    marginHorizontal: 40,
  },
  verticalLine: {
    borderLeftWidth: 2,
    borderLeftColor: colors.dividerBorder,
    marginHorizontal: 20,
  },
  title: {
    color: colors.copyMedium,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12
  },
  followNo: {
    alignSelf: 'center',
    color: colors.primary
  },
  iconPosition: {
    alignSelf: 'center'
  },
  contentContainer: {
    paddingVertical: 20
  }
});
