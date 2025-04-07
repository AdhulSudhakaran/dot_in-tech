import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Home } from "./screens/home";
import { getCurrentTheme, setCurrentTheme, setThemeData } from "./slices/AppSlice";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SplashScreen from "./screens/SplashScreen";
import AppColors from "./utils/AppColors";


export type AppStackParamList = {
    'Home': undefined,
    'SplashScreen': undefined
};

const AppStack = createStackNavigator<AppStackParamList>();

const AppStackNavigator:React.FC = () => {
    const systemTheme = useColorScheme();
    const _theme = useSelector(getCurrentTheme)
    const dispatch = useDispatch();
    const [showSplash, setShowSplash] = useState(true)


    useEffect(() => {
        if (_theme == 'light') {
            dispatch(setThemeData(AppColors.light))
        } else {
            dispatch(setThemeData(AppColors.dark))
        }
    }, [_theme])


    useEffect(() => {
        getCurrentThemeData()
    }, [])


    const getCurrentThemeData = async () => {//@ts-ignore
        const async_data = JSON.parse(await AsyncStorage.getItem('@theme'))
        if (async_data == 'dark') {
            dispatch(setCurrentTheme('dark'))
        } else if (async_data == 'light') {
            dispatch(setCurrentTheme('light'))
        } else {
            dispatch(setCurrentTheme(systemTheme))
        }
        setTimeout(() => {
            setShowSplash(false)
        }, 2000);
    }




    return (
        <AppStack.Navigator screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid, 
        }} >
            {
                showSplash ?
                    <AppStack.Screen name='SplashScreen' component={SplashScreen} />
                    :
                    <AppStack.Screen name='Home' component={Home} />

            }
        </AppStack.Navigator>
    )
}

export default AppStackNavigator