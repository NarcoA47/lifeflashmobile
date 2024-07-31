import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function StepComponent() {
  return (
    <View style={styles.container}>
        <View style={styles.stepController}>
            <View style={styles.leadingText}>
                <Text>Steps to Follow</Text>
            </View>
            <View style={styles.stepComponentController}>
                <View style={styles.iconController}>
                    
                </View>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {

    },
})