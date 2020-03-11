import React, { useEffect } from 'react';
import {
  View, Image, Text, TextInput, TouchableOpacity, UseEffect,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import Snackbar from 'react-native-snackbar';

import logo from '../../../assets/images/logo.png';
import styles from './styles';
import { colors } from '../../styles';
import { loginUser } from '../../../actions';


// eslint-disable-next-line react/prefer-stateless-function
class Login extends React.Component {
   // eslint-disable-next-line react/state-in-constructor
   state = {
     email: '',
     password: '',
   };

    handleLogin = () => {
      const { email, password } = this.state;
      if (email === '') {
        Snackbar.show({
          text: 'Please enter a valid email',
          duration: Snackbar.LENGTH_SHORT,
        });
      } else if (password === '') {
        Snackbar.show({
          text: 'Please enter your password',
          duration: Snackbar.LENGTH_SHORT,
        });
      } else {
        const userData = {
          email,
          password
        };
        // eslint-disable-next-line react/destructuring-assignment
        this.props.performLogin(userData);
      }
      // perform login query
      // store the login data into redux
    }


    render() {
      const { User: { errorMessage } } = this.props;
      return (
        <View style={styles.container}>
          <View style={styles.topBody}>
            <Image source={logo} style={styles.logo} tintColor={colors.light} />
          </View>
          <View style={styles.lowerBody} />
          <View style={styles.card}>
            <Text style={styles.login}> Login </Text>
            <View>
              <View>
                <View style={styles.row}>
                  <Icon name="account-circle" size={16} style={styles.icon} />
                  <Text style={styles.displayText}> Email </Text>
                </View>
                <TextInput style={styles.input} underlineColorAndroid="transparent" autoCapitalize="none" onChangeText={(email) => this.setState({ email })} />
              </View>
              <View>
                <View style={styles.row}>
                  <Icon name="lock" size={16} style={styles.icon} />
                  <Text style={styles.displayText}> Password </Text>
                </View>
                <TextInput style={styles.input} secureTextEntry underlineColorAndroid="transparent" onChangeText={(password) => this.setState({ password })} />
              </View>
              <TouchableOpacity style={styles.button} activeOpacity={0.83} onPress={this.handleLogin}>
                <Text style={{ color: colors.light, alignSelf: 'center' }}> Continue </Text>
              </TouchableOpacity>
            </View>
          </View>
          {errorMessage && (
            <Text style={styles.errorMessage}>
              {' '}
              {errorMessage}
              {' '}
            </Text>
          )}
        </View>
      );
    }
}
const mapDispatchToProps = (dispatch) => ({
  performLogin: (userData) => {
    dispatch(loginUser(userData));
  },
  getDispatch: () => dispatch,
});

const mapStateToProps = ({ User }) => ({
  User,
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
