import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { DarkModeIcon, FontScaleDark, FontScaleWhite, LightModeIcon } from '../../../assets'
import { getCurrentTheme, getFontValue, getThemeData, setCurrentTheme } from '../../slices/AppSlice'
import AppColors from '../../utils/AppColors'
import { ListDATA } from '../../utils/ArrayDatas'
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../utils/CommonHelper'
import ScaleModal from './ScaleModal'


const Home: React.FC = () => {
    const dispatch = useDispatch()
    const color_scheme = useSelector(getThemeData)
    const _theme = useSelector(getCurrentTheme)
    const [isScaleModalVisible, setScaleModalVisible] = useState(false)
    const scal_value = useSelector(getFontValue)


    const handleTheme = () => {
        if (_theme == 'dark') {
            dispatch(setCurrentTheme('light'));
            AsyncStorage.setItem('@theme', JSON.stringify('light'));
        } else {
            dispatch(setCurrentTheme('dark'));
            AsyncStorage.setItem('@theme', JSON.stringify('dark'));
        }
    }
    

    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity style={[styles.item, { backgroundColor: color_scheme.header_bg }]} activeOpacity={0.9} >
                <View>
                    <Text
                        style={[styles.name, { color: color_scheme.label_color, fontSize: 20 + scal_value }]}
                        numberOfLines={1} >{item?.name}</Text>
                    <Text
                        style={[styles.location, { color: color_scheme.faded_text ,fontSize: 14 + scal_value , }]}
                        numberOfLines={1}  >{item?.location}</Text>
                </View>
                <Image
                    style={styles.image}
                    source={{ uri: item?.image }}
                />
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container} >
            <View style={[styles.header, { backgroundColor: color_scheme.header_bg }]} >
                <Text style={[styles.headlabel, { color: color_scheme.label_color,fontSize: 26 + scal_value }]} >Discover</Text>

                <View style={styles.row} >
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setScaleModalVisible(true)} >
                        {_theme == 'dark' ? <FontScaleWhite /> : <FontScaleDark />}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleTheme()} activeOpacity={0.7} >
                        {_theme == 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={ListDATA}
                style={[styles.body, { backgroundColor: color_scheme.bg_color }]}
                contentContainerStyle={styles.contentContainerStyle}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                maxToRenderPerBatch={10}
                windowSize={5}
                removeClippedSubviews={true}
                updateCellsBatchingPeriod={50}
            />

            <ScaleModal
                isVisible={isScaleModalVisible}
                closeModal={() => setScaleModalVisible(false)}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.12,
        backgroundColor: AppColors.dark.header_bg,
        paddingTop: DEVICE_HEIGHT * 0.056,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    body: {
        flex: 1,
        backgroundColor: AppColors.dark.bg_color,
    },
    headlabel: {
        fontWeight: 'bold'
    },
    contentContainerStyle: {
        gap: 15,
        paddingVertical: 30,
        paddingHorizontal: 15
    },
    item: {
        height: 140,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 18,
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    name: {
        fontWeight: '600',
        width: DEVICE_WIDTH * 0.55
    },
    location: {
        fontWeight: '600',
        width: DEVICE_WIDTH * 0.55
    }
})