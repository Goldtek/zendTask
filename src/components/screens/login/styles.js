import { StyleSheet, Dimensions, Platform } from 'react-native';

import { colors } from '../../styles';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light
  },
  topBody: {
    backgroundColor: colors.primary,
    flex: 1.4,
    width,
    alignContent: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  lowerBody: {
    backgroundColor: colors.light,
    flex: 1,
    width,
    zIndex: 1
  },
  card: {
    position: 'absolute',
    padding: 20,
    top: Platform.OS === 'ios' ? 400 : 230,
    zIndex: 20,
    height: 280,
    width: 320,
    alignSelf: 'center',
    backgroundColor: colors.light,
    elevation: 6,
    borderRadius: 15,

  },
  logo: {
    height: 200,
    width: width - 60,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  login: {
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 5
  },
  icon: { marginHorizontal: 5, color: colors.blueGrey },
  input: {
    height: 40,
    borderBottomColor: colors.dividerLine,
    borderBottomWidth: 1,
    width: 240,
    marginLeft: 30,
  },
  button: {
    backgroundColor: colors.primary,
    marginVertical: 20,
    marginHorizontal: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  displayText: { color: colors.copyMedium, fontSize: 12 },
  errorMessage: {
    color: colors.red,
    alignSelf: 'center',
    marginBottom: 3,
    marginHorizontal: 15
  }
});
