import React, { useEffect, useState }  from 'react'
import { StyleSheet, Text, View } from 'react-native'
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

export default function TextManager() {

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
            <Text style={styles.leadingText}>
                Whether you need a pharmacy prescription, treatment for a health concern or would like to receive expert medical advice, book an appointment today to speak to an experienced LIFEFLASH Expert.
            </Text>
            <View style={styles.divided}>
                <Text style={styles.textItem}>
                    Fast
                </Text>
                <View style={styles.dot}></View>
                <Text style={styles.textItem}>
                    Convient
                </Text>
                <View style={styles.dot}></View>
                <Text style={styles.textItem}>
                    Secure
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text>
                    Using LIFEFLASH is the easiest way to access Medical care where and when you need.
                </Text>
            </View>
            <View style={styles.textContainerListing}>
                <Text style={styles.listItem}>
                    Same day appointments available 
                </Text>
                <Text style={styles.listItem}>
                    Prescriptions for any Zambian pharmacy
                </Text>
                <Text style={styles.listItem}>
                    From your computer, tablet or mobile
                </Text>
                <Text style={styles.listItem}>
                    Experienced medical team
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    divided: {

    },

    leadingText: {
        marginTop: 24,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
    },

    divided: {
        flexDirection: 'row', 
    },

    dot: {
        backgroundColor: 'black',
        width: 5,
        height: 5,
        borderRadius: 50,
        marginTop: 35,
    },

    textItem: {
        fontFamily: 'Poppins-Bold',
        margin: 24,
        fontSize: 20,
        textAlign: 'center',
    },

    textContainer: {
        fontSize: 14,
        textAlign: 'center',
        // fontFamily: 'Poppins-Black'
    },

    textContainerListing: {
        fontSize: 14,
        // fontFamily: 'Poppins-Black'
    },
 })