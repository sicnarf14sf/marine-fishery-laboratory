import React from 'react';
import imageBackground from '../../assets/images/background.png';
import { ImageBackground, View, Text, TouchableOpacity, Image} from 'react-native';
import { styles } from '../../shared/Styles';
import { exploration_styles } from '../../shared/exploration_styles';
import { Link } from 'expo-router';

/* 

  This will be the exploration page of the application where users 
    can choose which fish to view and play puzzles on

*/

export default function menu() {

  return (
    /* Main Container */
    <View style={exploration_styles.main_container}>

      {/* Top Container */}
      <View style={exploration_styles.top_container}>
        <ImageBackground
            style={styles.backgroundImage}
            source={imageBackground}
            resizeMode='cover'
          />
        <Text style={exploration_styles.header}> Explore Fishes </Text>
      </View>

      {/* Bottom Container */}
      <View style={exploration_styles.bottom_container}>

        <View style={exploration_styles.bc_subcon1}>

        {/* Fish: Shark */}
        <Link 
        href={{
          pathname: './show_fish_2d', 
          params: { fish: 'Shark', local_name: 'Pating', scientific_name: 'Selachimorpha'}
          }} asChild>
          <TouchableOpacity style={exploration_styles.fish_container}>
            <Image
              source={require('../../assets/images/fishes/Shark.jpg')}
              style={exploration_styles.fish}
              resizeMode='contain'></Image>
          </TouchableOpacity>
        </Link>
        
        {/* Fish: Lapu-lapu */}
        <Link 
        href={{
          pathname: './show_fish_2d', 
          params: { fish: 'Lapulapu1', local_name: 'Lapu-lapu', scientific_name: 'Epinephelinae'}
          }} asChild>
          <TouchableOpacity style={exploration_styles.fish_container}>
            <Image
              source={require('../../assets/images/fishes/Lapulapu1.jpg')}
              style={exploration_styles.fish}
              resizeMode='contain'></Image>
          </TouchableOpacity>
          </Link>
        </View>
        
        
        {/* Fish: Gourami */}
        <View style={exploration_styles.bc_subcon2}>
        <Link 
        href={{
          pathname: './show_fish_2d', 
          params: { fish: 'Gourami2', local_name: 'Gurami', scientific_name: 'Osphronmidae'}
          }} asChild>
          <TouchableOpacity style={exploration_styles.fish_container}>
            <Image
              source={require('../../assets/images/fishes/Gourami2.jpg')}
              style={exploration_styles.fish}
              resizeMode='contain'></Image>
          </TouchableOpacity>
        </Link>
        
        {/* Fish: Gourami */}
        <Link 
        href={{
          pathname: './show_fish_2d', 
          params: { fish: 'Gourami', local_name: 'Gurami', scientific_name: 'Osphronmidae'}
          }} asChild>
          <TouchableOpacity style={exploration_styles.fish_container}>
            <Image
              source={require('../../assets/images/fishes/Gourami.jpg')}
              style={exploration_styles.fish}
              resizeMode='contain'></Image>
          </TouchableOpacity>
        </Link>
        </View>

        <View style={exploration_styles.bc_subcon3}>
          <View style={exploration_styles.bc_subcon3_subcon1}>
            <Text style={exploration_styles.bottom_header}>Please choose a fish</Text>
          </View>
        </View>

      </View>
    </View> // main container ends
  )
}

