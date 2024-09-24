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
            Whether you need a pharmacy prescription, treatment for a health concern, or expert medical advice, book an appointment today to speak with an experienced LIFEFLASH Expert.
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
            <View>
                <Text style={styles.textContainer}>
                    Using LIFEFLASH is the easiest way to access Medical care where and when you need.
                </Text>
            </View>
            <View style={styles.textContainerListing}>
                <View style={styles.listItem}>
                <View style={styles.bullet}></View>
                <Text style={styles.item}>Same day appointments available</Text> 
                </View>
                <View style={styles.listItem}>
                <View style={styles.bullet}></View>
                <Text style={styles.item}>Prescriptions for any Zambian pharmacy</Text>
                </View>
                <View style={styles.listItem}>
                <View style={styles.bullet}></View>
                <Text style={styles.item}>From your computer, tablet or mobile</Text>
                </View>
                <View style={styles.listItem}>
                    <View style={styles.bullet}></View>
                    <Text style={styles.item}>Experienced medical team</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 12,
    },

    leadingText: {
        justifyContent: 'center',
        margin: 4,
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
    },

    divided: {
        justifyContent: 'center',
        flexDirection: 'row', 
    },

    dot: {
        backgroundColor: '#30B3FF',
        width: 5,
        height: 5,
        borderRadius: 50,
        marginTop: 16,
    },

    textItem: {
        color: '#30B3FF',
        fontFamily: 'Poppins-Bold',
        margin: 8,
        fontSize: 18,
        textAlign: 'center',
    },

    textContainer: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        margin: 4,
        padding: 4,
    },

    textContainerListing: {
        marginTop: 12, 
    },

    listItem: {
        flexDirection: 'row', 
        margin: 8
    },

    bullet: {
        backgroundColor: 'black',
        width: 5,
        height: 5,
        borderRadius: 50,
        margin: 6,
    },
    item: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
 })