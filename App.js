import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable, ImageBackground } from 'react-native';
import imageBackground from './assets/images/background.png';
import { KeyboardAvoidingView } from 'react-native-web';


export default function App() {
  const[name, setName] = useState('');

  return (
    
    //Main Container
    <View style={styles.root}>

      {/* Top Portion Container */}
      <View style={styles.top}>
        <Text style={styles.header}>Welcome! {name}</Text>
        <Text style={styles.header2}>Please Enter Your Name:</Text>
        <TextInput 
          style={styles.inputName} 
          placeholder='Enter Name Here...' 
        />
        <Pressable style={styles.button}>
          <Text style= {styles.buttonText}>Proceed</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
      
      {/* Bottom Portion Container */}
      <ImageBackground 
        style={styles.bottom}
        source={imageBackground} 
        resizeMode='cover'>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 2,
  },
  top: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '20%',
    paddingBottom: '20%',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-start',
    opacity: 0.6,
  },
  header: {
    fontSize: 40,
    fontWeight: '700',
    color: '#0784B5',
    paddingVertical: 30,
  },
  header2: {
    fontFamily: 'sans-serif-thin',
    fontSize: 30,
    fontWeight: 'normal',
    color: '#0784B5',
    paddingVertical: 18,
  },
  inputName : {
    fontFamily: 'Roboto',
    borderWidth: 1,
    borderColor: '#0784B5',
    borderRadius: 23,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 20,
    width: '80%',
    fontSize: 20,
  },
  button: {
    width: '50%',
    height: '15%',
    paddingVertical: 5, 
    paddingHorizontal: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9BD4E4',
    elevation: 3,
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  }
});
