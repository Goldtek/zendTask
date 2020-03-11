import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import styles from './styles';

export default class SignUp extends Component {
    state = {
      avatarSource: null,
    };


     selectPhotoTapped = () => {
       const options = {
         quality: 1.0,
         maxWidth: 500,
         maxHeight: 500,
         storageOptions: {
           skipBackup: true,
         },
       };

       ImagePicker.showImagePicker(options, (response) => {
         console.log('Response = ', response);

         if (response.didCancel) {
           console.log('User cancelled photo picker');
         } else if (response.error) {
           console.log('ImagePicker Error: ', response.error);
         } else if (response.customButton) {
           console.log('User tapped custom button: ', response.customButton);
         } else {
           const source = { uri: response.uri };

           // You can also display the image using data:
           // let source = { uri: 'data:image/jpeg;base64,' + response.data };

           this.setState({
             avatarSource: source,
           });
         }
       });
     }

     render() {
       const { avatarSource } = this.state;
       return (
         <View>
           <TouchableOpacity onPress={this.selectPhotoTapped}>
             <View
               style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}
             >
               {avatarSource === null ? (
                 <Text>Select a Photo</Text>
               ) : (
                 <Image style={styles.avatar} source={avatarSource} />
               )}
             </View>
           </TouchableOpacity>
         </View>
       );
     }
}
