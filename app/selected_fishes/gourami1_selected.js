import React, { useState } from 'react'
import imageBackground from '../../assets/images/background.png';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { styles } from '../../shared/Styles'

export default function menu() {
  const [fish, setFishName] = useState('');
  const [selected, selectFish] = useState(false);

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
            <Text> Gourami</Text>
      </View>

      {/* Bottom Container */}
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
    flex: 0.4,
  },

})
