import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor: colors.light,
    padding: 16,
    height: 170,
    width: 250,
    borderRadius: 10,
    marginHorizontal: 20
  },
  row: {
    flexDirection: 'row',
  },
  profileImg: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    marginRight: 5,
  },
  name: {
    color: colors.darkBlack,
    alignSelf: 'center'
  },
  top: {
    marginTop: 10,
  },
  button: {
    height: 35,
    width: 100,
    padding: 10,
    elevation: 4,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  IconButton: {
    height: 35,
    width: 50,
    padding: 10,
    elevation: 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: colors.light,
  },
  buttonText: {
    color: colors.light
  },
  likeBackground: {
    backgroundColor: colors.success,
  },
  referBackground: {
    backgroundColor: colors.gIcon,
  }

});
