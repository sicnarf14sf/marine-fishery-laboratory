import React, { useState } from 'react'
import imageBackground from '../assets/images/background.png';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { styles } from '../shared/Styles'
import { useState } from 'react';

export default function menu() {
  return (
    <View style={mainmenu_styles.main_container}>

      <View style={mainmenu_styles.top_container}>
        <ImageBackground
            style={styles.backgroundImage}
            source={imageBackground}
            resizeMode='cover'
          />
        <Text style={mainmenu_styles.header}> Explore Fishes</Text>
      </View>


      <View style={mainmenu_styles.bottom_container}>

        <View style={mainmenu_styles.bc_subcon1}>
          <TouchableOpacity style={mainmenu_styles.fish_container}>
            <Image
              source={require('../assets/images/fishes/Shark.jpeg')}
              style={mainmenu_styles.fish}
              resizeMode='contain'></Image>
          </TouchableOpacity>

          <TouchableOpacity style={mainmenu_styles.fish_container}>
            <Image
              source={require('../assets/images/fishes/Lapulapu1.jpg')}
              style={mainmenu_styles.fish}
              resizeMode='contain'></Image>
          </TouchableOpacity>
        </View>
        
        <View style={mainmenu_styles.bc_subcon2}>
          <TouchableOpacity style={mainmenu_styles.fish_container}>
            <Image
              source={require('../assets/images/fishes/Gourami2.jpg')}
              style={mainmenu_styles.fish}
              resizeMode='contain'></Image>
          </TouchableOpacity>

          <TouchableOpacity style={mainmenu_styles.fish_container}>
            <Image
              source={require('../assets/images/fishes/Gourami.jpg')}
              style={mainmenu_styles.fish}
              resizeMode='contain'></Image>
          </TouchableOpacity>
        </View>

        <View style={mainmenu_styles.bc_subcon3}>
          <View style={mainmenu_styles.bc_subcon3_subcon1}>
            <Text style={mainmenu_styles.bottom_header}>Please choose a fish</Text>
          </View>
        </View>

      </View>
      {/* Bottom Container */}
    </View> // main container
  )
}

const mainmenu_styles = StyleSheet.create({
  main_container: {
    flex: 2,
  },
  top_container: {
    flex: 1,
    alignItems: 'center',
  },
  header:{
    fontSize: 40,
    fontWeight: '700',
    color: '#003448',
    paddingVertical: 100,
    position: 'absolute',
  },
  bottom_header: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottom_container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  bc_subcon1: {
    flex: 0.4,
    flexDirection: 'row',
  },
  bc_subcon2: {
    flex: 0.4,
    flexDirection: 'row',
  },
  bc_subcon3: {
    flex: 0.25,
    flexDirection: 'row',
  },
  bc_subcon3_subcon1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FBF1D7',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fish_container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    width: '50%',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 7,
    borderRadius: 10,
  },
  fish: {
    width: '100%', 
    height: '100%',
  },
})