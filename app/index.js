import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, AppRegistry, Alert, TextInput, ImageBackground, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import imageBackground from '../assets/images/background.png';
import { styles } from '../shared/Styles'
import Main_buttons from '../components/main_buttons.js'
import { router } from 'expo-router'

/*
                  PROGRAM MODULE STRUCTURE

└── App () 
    └── Root                    ── Root  
        |─── Top                    └── Top       
              |─── header                |─── header
              |─── header2               |─── header2r
              |─── inputName             |─── Educational Button
              └─── proceedButton         └─── Exploration Button
        └─── Bottom                  ── Bottom
              └─── backgroundImage       └─── backgroundImage
*/


export default function App() {
  const [name, setName] = useState('Francis');
  const [loggedIn, setLoggedIn] = useState(true);

  const show_alert = () => // alert dialog box
        Alert.alert(
          'No Name Entered!',
          'Please Enter a Name',
          [
            {
              text: 'Close',
              style: 'cancel',
            },
          ],
          {
            cancelable: true,
          },
  );

  const proceed_handler = () => {
    if(! name ) {  // returns an alert message if no name is entered
      return show_alert()
      
    }

    setLoggedIn(true) // changes the top container if name is entered and proceed is pressed
  }

  return (

    <View style={styles.root}>
      {!loggedIn ?(
        /* Top Portion Container */
        <KeyboardAvoidingView enabled behavior='height' style={styles.top}>
            <Text style={styles.header}>Welcome!</Text>
            <Text style={styles.header2}>Please Enter Your Name:</Text>
            <TextInput
              style={styles.inputName}
              placeholder='Enter Name Here...'
              onChangeText={(text) => setName(text)}
            />
            <TouchableOpacity style={styles.button} onPress={() => proceed_handler()}> 
              <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </KeyboardAvoidingView>
      ) : (
        <View style={styles.top}>
          <Text style={styles.header}>Welcome, {name}</Text>
          <Text style={styles.header2}>Choose mode</Text>
          <Main_buttons/>
        </View>
      )}

      {/* Bottom Portion Container */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.bottom}
      >
        <ImageBackground
          style={styles.backgroundImage}
          source={imageBackground}
          resizeMode='cover'
        />
      </KeyboardAvoidingView>
    </View>
  );
}

AppRegistry.registerComponent('marine-fishery-laboratory', () => App);