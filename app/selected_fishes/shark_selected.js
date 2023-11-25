import React, { useState } from 'react'
import imageBackground from '../../assets/images/background.png';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { styles } from '../../shared/Styles'
import { mainmenu_styles } from '../../shared/mainmenu_styles';

export default function show_fish() {

  return (
    <View style={fish_selected.main_container}>
      {/* Top Container */}
      <View style={fish_selected.top_container}>
        <ImageBackground
            style={styles.backgroundImage}
            source={imageBackground}
            resizeMode='cover'
          />
      </View>
      
      {/* Middle Container */}
      <View style={fish_selected.middle_container}>
        <Image
          source={require('../../assets/images/fishes/Shark.jpeg')}
          style={fish_selected.fish}
          resizeMode='contain'></Image>

      </View>

      {/* Bottom Container */}
      <View style={fish_selected.bottom_container}>
        <Text style={mainmenu_styles.bottom_header}> {fish} </Text>
          <View style={fish_selected.fish_info_container}>
            <Text style={fish_selected.fish_info}> Local Name: <Text style={{fontStyle: 'italic'}}> Pating </Text> </Text>
            <Text style={fish_selected.fish_info}> Scientific Name: <Text style={{fontStyle: 'italic'}}> Selachimorpha </Text> </Text>
            <Text style={fish_selected.fish_info}> Other details go from here down</Text>
          </View>
        <TouchableOpacity style={fish_selected.puzzle_button}>
          <Text style={fish_selected.button_text}>Proceed to Puzzle</Text>
        </TouchableOpacity>
      </View>
    </View> // main container
  )
}

const fish_selected = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  top_container: {
    flex: 0.3
  },  
  middle_container: {
    flex: 0.3,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  puzzle_button: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#B9E01D',
    paddingVertical: 10,
    paddingHorizontal: 38,
    borderRadius: 16,
  },
  button_text: {
    color: '#FFFFFF',
    fontSize: 20,
  }, 
  bottom_container: {
    flex: 0.4,
    flexDirection: 'column',
    backgroundColor: '#FBF1D7',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
    elevation: 50,
    paddingVertical: 20,
  },
  fish: {
    width: '100%',
    height: '100%',
  },
  fish_info_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  fish_info: {
    fontSize: 20,
  }
})
