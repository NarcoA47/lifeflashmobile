import React, { useEffect, useState }  from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Font from 'expo-font';
import AntDesign from '@expo/vector-icons/AntDesign';

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


export default function StepComponent() {

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
        <View style={styles.stepController}>
            <View style={styles.leadingText}>
                <Text style={styles.leadingTextManager}>Steps to Follow</Text>
            </View>
            <View style={styles.stepComponentController}>
                <View style={styles.stepComponentMain}>
                    <View style={styles.iconController}>
                        <AntDesign name="calendar" size={42} color="white" />
                        
                    </View>
                    <View>
                    <Text style={styles.textControllerWithICon}> Step One: </Text>
                    </View>
                    <View style={styles.textConatiner}>
                        <Text style={styles.textController}>Select a day and time to book an appointment online </Text>
                    </View>
                </View>
                <View style={styles.stepComponentMain}>
                    <View style={styles.iconController}>
                        <AntDesign name="calendar" size={42} color="white" />
                    </View>
                    <View>
                    <Text style={styles.textControllerWithICon}> Step Two: </Text>
                    </View>
                    <View style={styles.textConatiner}>
                        <Text style={styles.textController}>Select a day and time to book an appointment online </Text>
                    </View>
                </View>
                <View style={styles.stepComponentMain}>
                    <View style={styles.iconController}>
                        <AntDesign name="calendar" size={42} color="white" />
                    </View>
                    <View>
                    <Text style={styles.textControllerWithICon}> Step Three: </Text>
                    </View>
                    <View style={styles.textConatiner}>
                        <Text style={styles.textController}>Select a day and time to book an appointment online </Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepComponentController: {
        flexDirection: 'row',
        textAlign: 'center'
    },
    stepComponentMain: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        padding: 4,
        width: 100,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    leadingText: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: 8,
        
    },

    leadingTextManager: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
    },

    iconController: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#033B39',
        borderRadius: 50,
        width: 80,
        height: 80,
        margin: 14,
    },

    textControllerWithICon: {
        margin: 8,
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
    },

    textController: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
    },
})