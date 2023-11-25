import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="main_menu" options={{headerShown: false, presentation: 'modal'}}/>
        <Stack.Screen name="show_fish" options={{headerShown: false, presentation: 'modal'}} />
        <Stack.Screen name="gourami1_selected" options={{headerShown: false, presentation: 'modal'}} />


    </Stack>
  )
}

export default StackLayout