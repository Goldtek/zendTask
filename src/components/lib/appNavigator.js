import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Profile from '../screens/profile';
import Login from '../screens/login';
import Channel from '../screens/channels';
import Mapview from '../screens/mapview';
import { colors } from '../styles';

// create screen for signup

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const defaultProps = {
  headerStyle: { backgroundColor: colors.primary },
  headerTintColor: colors.light,
  headerTitleStyle: { fontWeight: 'bold' }
};


export const PrivateNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      component={Channel}
      name="Home"
      options={{
        tile: 'Home',
        ...defaultProps,
        tabBarIcon: ({ focused }) => {
          const iconName = focused ? 'home-circle' : 'home';
          return <Icon name={iconName} size={24} color={colors.primary} />;
        }
      }}
    />
    <BottomTab.Screen
      component={Profile}
      name="Profile"
      options={{
        tile: 'Profile',
        ...defaultProps,
        tabBarIcon: ({ focused }) => {
          const iconName = focused ? 'account-circle' : 'account';
          return <Icon name={iconName} size={24} color={colors.primary} />;
        }
      }}
    />

    <BottomTab.Screen
      component={Mapview}
      name="Map"
      options={{
        tile: 'Map',
        ...defaultProps,
        tabBarIcon: ({ focused }) => {
          const iconName = focused ? 'leaf-maple' : 'map';
          return <Icon name={iconName} size={24} color={colors.primary} />;
        }
      }}
    />
  </BottomTab.Navigator>
);


export const PublicNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerStyle: {
          height: 0, // Specify the height of your custom header
        },
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerStyle: {
          height: 0, // Specify the height of your custom header
        },
      }}
    />
  </Stack.Navigator>
);
