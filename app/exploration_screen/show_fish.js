import React from 'react'
import imageBackground from '../../assets/images/background.png';
import { ImageBackground, View, Text, TouchableOpacity, Image} from 'react-native';
import { styles } from '../../shared/Styles'
import { fish_selected } from '../../shared/fish_selected';
import { exploration_styles } from '../../shared/exploration_styles';
import { useSearchParams, Link } from 'expo-router';

/*

  A dynamic screen which changes according to the selected fish in the exploration screen

*/

export default function show_fish() {
  
  const { fish , local_name, scientific_name, text } = useSearchParams(); // Retrieve fish details using the following library passed when function is invoked

   // Create a mapping of fish names to image sources * all image files are assumed to be '.jpg' as of the moment
  const fishImageSources = {
    Shark: require('../../assets/images/fishes/Shark.jpg'),
    Lapulapu1: require('../../assets/images/fishes/Lapulapu1.jpg'),
    Gourami2: require('../../assets/images/fishes/Gourami2.jpg'),
    Gourami: require('../../assets/images/fishes/Gourami.jpg'),
  };

  // Get the image source based on the fish name
  const fishImageSource = fishImageSources[fish];

  return (

    /* Main Container */
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
          source={fishImageSource}
          style={fish_selected.fish}
          resizeMode='contain'>
        </Image>
      </View>

      {/* Bottom Container */}
      <View style={fish_selected.bottom_container}>
        <Text style={exploration_styles.bottom_header}> {fish} </Text>
          <View style={fish_selected.fish_info_container}>
            <Text style={fish_selected.fish_info}> Local Name: <Text style={{fontStyle: 'italic'}}> {local_name} </Text> </Text>
            <Text style={fish_selected.fish_info}> Scientific Name: <Text style={{fontStyle: 'italic'}}> {scientific_name} </Text> </Text>
          </View>
        
        <Link href='./fish_puzzle' asChild> 
          <TouchableOpacity style={fish_selected.puzzle_button}>
            <Text style={fish_selected.button_text}>Proceed to Puzzle</Text>
          </TouchableOpacity>
        </Link>

      </View>

    </View> // main container ends here
  )
}