import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function OtpScreen() {
  return (
    <View style={styles.container}>
        <Text>OTP Screen</Text>
    </View>
  )
}

export default OtpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})