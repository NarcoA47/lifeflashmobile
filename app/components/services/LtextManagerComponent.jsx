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

export default function TextManagerComponentServices() {

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
            <View style={styles.headingText}>
                <Text style={styles.leadServiceText}>Our Services</Text>
            </View>
            <View style={styles.bodyText}>
               <Text style={styles.headServiceText}> LIFEFLASH is wide Range of health issues</Text>
            </View>
            <View style={styles.mainBodyText}>
                <Text style={styles.serviceBodyText}>
                    You can speak to LIFEFLASH about any health concern or symptom, and our doctors can provide medical advice, prescriptions, specialist referrals and sick notes if necessary.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },

    headingText: {
        margin: 8,
    },

    leadServiceText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
    },

    bodyText: {
        margin: 8,
    },

    headServiceText: {
        fontFamily: 'Poppins-Medium',
    },

    mainBodyText: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    serviceBodyText: {
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
    },

})