import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Provider } from 'react-redux'
import AppStackNavigator from './src/AppNavigator'
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
