import React from 'react'
import { Image } from 'react-native';
import { View, Button, Text, StyleSheet, TouchableOpacity, } from 'react-native';

const IconMenue = () => {
  return (
    <View>
        <Image
        source={require('../../assets/icons/Ticon.png')}
        style={styles.image}
        />
    </View>
  )
}

const styles = StyleSheet.create({
   image: {
    width: 50,
    height: 50,
   }
  });
  

export default IconMenue
