import React, { Component } from 'react';
import {
  View, FlatList, Dimensions, Alert, ActivityIndicator,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import { UserInfo } from '../../custom';
import styles from './styles';
import { colors } from '../../styles';

const { width } = Dimensions.get('window');
// eslint-disable-next-line react/prefer-stateless-function
export default class Mapview extends Component {
watchID: ?number = null;

constructor(props) {
  super(props);
  this.findCoordinates();
  this.state = {
    isLoading: true,
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    users: [
      {
        name: 'onwuegbuzie chisom dike',
        primary_skill: 'Software enginering',
        id: 1,
      },
      {
        name: 'Abaenowa franca chinansa',
        primary_skill: 'laboratory scientist',
        id: 2,
      },
      {
        name: 'Nwachukwu Evelyn',
        primary_skill: 'Civil Servant',
        id: 3,
      }

    ]
  };
}


componentWillUnmount() {
  // eslint-disable-next-line no-unused-expressions
  this.watchID != null && Geolocation.clearWatch(this.watchID);
}

    onRegionChangeComplete = (region) => {
      // fetch artisians in this region and load it -> call an action to do that and update redux
      this.setState({ region });
    }

    findCoordinates = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { coords: { longitude, latitude } } = position;
          const region = {
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          };
          this.setState({ region, isLoading: false });
        },
        (error) => Alert.alert('Error', JSON.stringify(error)),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
      this.watchID = Geolocation.watchPosition((position) => {
        const { coords: { longitude, latitude } } = position;
        const region = {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        this.setState({ region });
      });
    };

    render() {
      const { region, users, isLoading } = this.state;
      return (
        <View style={{ flex: 1 }}>
          {isLoading ? (
            <View style={styles.indicatorContainer}>
              <ActivityIndicator size="large" style={styles.indicator} color={colors.primary} />
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <MapView
                provider={PROVIDER_GOOGLE}
                initialRegion={region}
                style={{ flex: 1 }}
                onRegionChange={this.onRegionChangeComplete}
              />
              <View style={{
                height: 180, position: 'absolute', bottom: 0, width, marginHorizontal: 10
              }}
              >

                <FlatList
                  data={users}
                  renderItem={({ item }) => (<UserInfo item={item} />)}
                  keyExtractor={(item) => item.id}
                  horizontal
                />
              </View>
            </View>
          )}
        </View>
      );
    }
}
