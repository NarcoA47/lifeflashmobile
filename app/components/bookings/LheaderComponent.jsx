import React, { useEffect, useState }  from 'react'
import { StyleSheet, Text, View } from 'react-native'

import * as Font from 'expo-font';

const loadFonts = async () =>  {
    await Font.loadAsync({
        'Poppins-Black': require('../../../assets/fonts/Poppins/Poppins-Black.ttf'),
        // 'Poppins-BlackItalic': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
        'Poppins-Bold': require('../../../assets/fonts/Poppins/Poppins-Bold.ttf'),
        'Poppins-ExtraBold': require('../../../assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
        'Poppins-ExtraBoldItalic': require('../../../assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf'),
        'Poppins-ExtraLight': require('../../../assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
        'Poppins-Light': require('../../../assets/fonts/Poppins/Poppins-Light.ttf'),
        'Poppins-Medium': require('../../../assets/fonts/Poppins/Poppins-Medium.ttf'),
        // 'Poppins-MediunItalic': require('../../assets/fonts/Poppins/Poppins-MediunItalic.ttf'),
        'Poppins-Regular': require('../../../assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
        'Poppins-Thin': require('../../../assets/fonts/Poppins/Poppins-Thin.ttf'),
        'Poppins-ThinItalic': require('../../../assets/fonts/Poppins/Poppins-ThinItalic.ttf'),
    })
}

export default function headerComponentBooking() {

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
        <Text style={styles.textManager}>Set An Appointment</Text>
        <View style={styles.borderBottom}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    textManager: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
    },

    borderBottom: {
        alignItems: 'center',
        borderColor: 'black',
        borderBottomWidth: 5,
        width: 350,
        borderRadius: 5,
        margin: 5,
    },
})
