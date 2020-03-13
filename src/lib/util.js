import storage from '@react-native-firebase/storage';

//  photo: { path: uri, mimeType: 'image/jpeg' }
// eslint-disable-next-line import/prefer-default-export
export const uploadImageToFirebase = async (photo, id) => {
  const { path } = photo;
  const metadata = {
    contentType: 'image/jpeg'
  };
  const storageRef = storage().ref('profile');
  const imageRef = storageRef.child('photo.jpg'); // change the path id (unique i dentifier of the image), you can use the userId
  const snapshot = await imageRef.put(path, metadata);
  const { downloadURL } = snapshot;
  return downloadURL;
};


