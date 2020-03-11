import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import { LOGIN_SUCCESS, CREATE_USER, STORE_USER_ERROR_MSG } from './action-types';

export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });
export const errorMessage = (message) => ({ type: STORE_USER_ERROR_MSG, message });

export const register = (email, password, fullname) => async (dispatch) => {
  try {
    const navigation = useNavigation();
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await auth().currentUser.updateProfile({
      displayName: fullname,
      // photoURL
    });
    // store image
    // fetch user details
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  } catch (e) {
    dispatch(errorMessage(e.message));
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const { email, password } = userData;
    await auth().signInWithEmailAndPassword(email, password);
    console.log(auth().currentUser);
    dispatch(loginSuccess());
  } catch (error) {
    dispatch(errorMessage(error.message));
  }
};

//fetch all user 

//store error message
