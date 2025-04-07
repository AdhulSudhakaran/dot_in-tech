import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { LogoImage } from '../../assets/png'

const SplashScreen:React.FC = () => {
  return (
    <View style={styles.container} >
      <Image source={LogoImage} style={styles.image} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
      height:75,
      width:75,
      resizeMode:'contain'
    }
})