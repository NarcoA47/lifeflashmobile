import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function ContactScreen() {
  return (
    <View style={styles.container}>
        <Text>Contact Screen</Text>
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})