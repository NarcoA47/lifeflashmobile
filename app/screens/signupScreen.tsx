import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Signup() {
  return (
    <View style={styles.container}>
        <Text>Sign up</Text>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})