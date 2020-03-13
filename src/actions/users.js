import firestore from '@react-native-firebase/firestore';
import reverseGeocode from 'latlng-to-zip';
import Config from 'react-native-config';
import {
  STORE_USER_ERROR_MSG, ARTISIAN, REGION_CHANGED, STORE_FRIENDS
} from './action-types';

export const errorMessage = (message) => ({ type: STORE_USER_ERROR_MSG, message });
export const storeArtisians = (artisians) => ({ type: REGION_CHANGED, artisians });
export const storeFriends = (friends) => ({ type: STORE_FRIENDS, friends });

export const fetchArtisians = (region) => async (dispatch) => {
  const key = Config.GOOGLE_MAPS_API_KEY;
  try {
    const zipcode = reverseGeocode(region, key);
    const documentSnapshot = await firestore()
      .collection('users')
      .where('zipcode', '==', zipcode)
      .where('userType', '==', ARTISIAN)
      .get();
    const artisians = documentSnapshot.metadata();
    console.log('artisians', artisians);
    dispatch(storeArtisians(artisians));
  } catch (error) {
    dispatch(errorMessage(error));
  }
};

export const fetchInitialArtisians = () => async (dispatch) => {
  try {
    const documentSnapshot = await firestore()
      .collection('users')
      .where('userType', '==', ARTISIAN)
      .get();
    const artisians = documentSnapshot.metadata();
    dispatch(storeArtisians(artisians));
  } catch (error) {
    dispatch(errorMessage(error));
  }
};

// find the nearest 

export const fetchFriends = (userId) => async (dispatch) => {
  try {
    const documentSnapshot = await firestore()
      .collection('users')
      .doc(userId)
      .collection('friends')
      .get();
    const friends = documentSnapshot.data();
    console.log('friends', friends);
    dispatch(storeFriends(friends));
  } catch (error) {
    dispatch(errorMessage(error));
  }
};


// perform search

// picture of job done in profile

// settings icon on mapview
