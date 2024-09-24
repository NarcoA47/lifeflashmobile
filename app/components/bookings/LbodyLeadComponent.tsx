import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function BodyLeadComponent() {
  return (
    <View style={styles.container}>
        <Image
          src='../../../assets/components/2.jpg'
          style={styles.imageManager}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      margin: 50,
      borderRadius: 10,
    },
    imageManager: {
       width: 200,
       height: 200,
    },
})