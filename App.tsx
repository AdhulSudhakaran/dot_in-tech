import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import AppColors from './src/utils/AppColors'
import { NavigationContainer } from '@react-navigation/native'
import AppStackNavigator from './src/AppNavigator'
import { Provider } from 'react-redux'
import store from './src/store/Store'

const App = () => {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </Provider>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
    backgroundColor: AppColors.dark.header_bg
  },
  body: {
    flex: 0.8,
    backgroundColor: AppColors.dark.bg_color,
  }
})