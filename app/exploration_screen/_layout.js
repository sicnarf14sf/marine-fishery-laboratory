import React from 'react'
import { StyleSheet } from 'react-native'
import { Stack } from 'expo-router'


/*
  
  Study what this part does....

*/

const StackLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="exploration" options={{headerShown: true, headerTitle: '', presentation: 'modal'}}/>
        <Stack.Screen name="show_fish_2d" options={{headerShown: false, presentation: 'modal'}} />
        <Stack.Screen name="show_fish_3d" options={{headerShown: false, presentation: 'modal'}} />
    </Stack>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 0,
  },

})

export default StackLayout