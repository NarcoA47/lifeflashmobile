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

export default function BannerComponent() {
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
            <View style={styles.banner}>
                <Text style={styles.bannerText}>Colds Flu Chest infections Asthma Skin infections Skin rashes Ear infections Conjunctivitis Gout Vomiting and Diarrhea Diabetes Smoking cessation Erectile dysfunction Contraception Urinary Tract Infections (UTIs) prescriptions Medical Certificates and more...</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        magin: 8,
    },

    banner: {
        // backgroundColor: '#03BB72',
        backgroundColor: '#033B39',
        borderRadius: 10,
        padding: 14,
        margin: 10,
    },

    bannerText: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: '#ffff'
    },
})