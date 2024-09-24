import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function ImageHeader() {
  return (
   <View style={styles.container}>
    <Image
    source={require('../../assets/components/1.png')}
    style={styles.image}
    />
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
    },
})