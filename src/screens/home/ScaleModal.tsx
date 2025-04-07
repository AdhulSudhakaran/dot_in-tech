import { Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../utils/CommonHelper'
import { useDispatch, useSelector } from 'react-redux'
import { getFontValue, getThemeData, setFontValue } from '../../slices/AppSlice'


interface Props {
    isVisible: boolean,
    closeModal: () => void
}

const ScaleModal: React.FC<Props> = ({ closeModal, isVisible }) => {
    const color_scheme = useSelector(getThemeData);
    const value = useSelector(getFontValue);
    const dispatch = useDispatch()


    return (
        <Modal visible={isVisible} statusBarTranslucent >
            <TouchableOpacity style={styles.container} activeOpacity={1} onPress={closeModal}  >
                <TouchableOpacity style={[styles.box, { backgroundColor: color_scheme.bg_color }]} activeOpacity={1} onPress={() => { }} >

                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => {
                            dispatch(setFontValue(-3))
                            closeModal()
                        }}
                        style={[styles.closeBtn, { backgroundColor: color_scheme.header_bg }]}
                    >
                        <Text style={{ color: color_scheme.label_color, fontSize: 16, fontWeight: '500' }} >Min</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => {
                            dispatch(setFontValue(0))
                            closeModal()
                        }}
                        style={[styles.closeBtn, { backgroundColor: color_scheme.header_bg }]}
                    >
                        <Text style={{ color: color_scheme.label_color, fontSize: 16, fontWeight: '500' }} >Medium</Text>
                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                        dispatch(setFontValue(6))
                        closeModal()
                    }}
                        style={[styles.closeBtn, { backgroundColor: color_scheme.header_bg }]}
                    >
                        <Text style={{ color: color_scheme.label_color, fontSize: 16, fontWeight: '500' }} >Max</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )
}

export default ScaleModal

const styles = StyleSheet.create({
    modalWrap: {
        flex: 1
    },
    container: {
        height: DEVICE_HEIGHT,
        width: DEVICE_WIDTH,
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignItems: "center",
        justifyContent: 'center'
    },
    box: {
        height: 150,
        width: DEVICE_WIDTH,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 20
    },
    closeBtn: {
        width: 100,
        height: 45,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    font: {

        fontSize: 14
    }
})