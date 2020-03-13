/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import Splash from './splash';

import { PublicNavigator, PrivateNavigator } from '../../lib/appNavigator';

// create screen for signup
// create screen for intro

const Root = () => {
  const [isLoading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    // fetch user data
    auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      }
    });
    // set loading status
    setLoading(false);
  });

  return (
    <NavigationContainer>
      {(isLoading) ? (
        <Splash />
      ) : (
        // check if loggedIn or not
        loggedIn ? (<PrivateNavigator />) : (<PublicNavigator />)
      )}
    </NavigationContainer>
  );
};

export default Root;
