import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function KycScreen() {
  return (
    <View style={styles.container}>
        <Text>KYC</Text>
    </View>
  )
}

export default KycScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})