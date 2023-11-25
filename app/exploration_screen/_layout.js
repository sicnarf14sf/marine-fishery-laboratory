import React from 'react'
import { Stack } from 'expo-router'

/*
  
  Study what this part does....

*/

const StackLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="exploration" options={{headerShown: false, presentation: 'modal'}}/>
        <Stack.Screen name="show_fish" options={{headerShown: false, presentation: 'modal'}} />
        <Stack.Screen name="fish_puzzle" options={{headerShown: true, presentation: 'modal'}} />
    </Stack>
  )
}

export default StackLayout