import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, AppRegistry, TextInput, ImageBackground, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import imageBackground from './assets/images/background.png';
import { styles } from './shared/Styles'

/*
PROGRAM MODULE STRUCTURE

.
└── App (Tk) 
    └── Root
        |─── Top
        └─── Bottom
*/
export default function App() {
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const proceed_handler = () => {
    setLoggedIn(true)
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

          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Exploration</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Educational</Text>
          </TouchableOpacity>
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