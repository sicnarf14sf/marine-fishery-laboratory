import React, { useState } from 'react';
import imageBackground from '../../assets/images/background.png';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { styles } from '../../shared/Styles';
import { mainmenu_styles } from '../../shared/mainmenu_styles';
import { Link } from 'expo-router';

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
              source={require('../../assets/images/fishes/Shark.jpeg')}
              style={mainmenu_styles.fish}
              resizeMode='contain'></Image>
          </TouchableOpacity>


          <TouchableOpacity style={mainmenu_styles.fish_container}>
            <Image
              source={require('../../assets/images/fishes/Lapulapu1.jpg')}
              style={mainmenu_styles.fish}
              resizeMode='contain'></Image>
          </TouchableOpacity>
        </View>
        
        <View style={mainmenu_styles.bc_subcon2}>
          <TouchableOpacity style={mainmenu_styles.fish_container}>
            <Image
              source={require('../../assets/images/fishes/Gourami2.jpg')}
              style={mainmenu_styles.fish}
              resizeMode='contain'></Image>
          </TouchableOpacity>

   
          <TouchableOpacity style={mainmenu_styles.fish_container}>
            <Image
              source={require('../../assets/images/fishes/Gourami.jpg')}
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

