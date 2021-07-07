import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from './pages/Main'

const Stack = createStackNavigator()

export const Routes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={MainScreen} />
    </Stack.Navigator>
  )
}

