import React, { useEffect, useState }  from 'react'
import { Text, View,TouchableOpacity, Alert, StyleSheet } from 'react-native'
import * as Font from 'expo-font';

const loadFonts = async () =>  {
    await Font.loadAsync({
        'Poppins-Black': require('../../assets/fonts/Poppins/Poppins-Black.ttf'),
        // 'Poppins-BlackItalic': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
        'Poppins-ExtraBold': require('../../assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
        'Poppins-ExtraBoldItalic': require('../../assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf'),
        'Poppins-ExtraLight': require('../../assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
        'Poppins-Light': require('../../assets/fonts/Poppins/Poppins-Light.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins/Poppins-Medium.ttf'),
        // 'Poppins-MediunItalic': require('../../assets/fonts/Poppins/Poppins-MediunItalic.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
        'Poppins-Thin': require('../../assets/fonts/Poppins/Poppins-Thin.ttf'),
        'Poppins-ThinItalic': require('../../assets/fonts/Poppins/Poppins-ThinItalic.ttf'),
    })
}

function ButtonComponentController() {

    const [fontLoaded, setFontLoaded] = useState();

    useEffect(() => {
        const fetchFonts = async () => {
            await loadFonts();
            setFontLoaded(true);
        }

        fetchFonts();
    }, [])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonController}>
                <Text styles={styles.text}>Book Now</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonComponentController

const styles = StyleSheet.create({

    container: { 
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonController: {
        backgroundColor: '#03BB72',
        width: 150,
        height: 30,
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        margin: 10,
    },    

    text: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
    },
})