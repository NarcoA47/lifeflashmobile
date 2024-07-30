import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuButton from './LmenuCompont';
import { ScrollView } from 'react-native-gesture-handler';
import IconMenue from './LiconCompoent'

export default function NavigationBar({navigation}){
  return (
    <View>
        <View>
        <View style={styles.title}>
            <IconMenue/>
            <MenuButton navigation={navigation} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',  
        alignItems: 'center',
        margin: 12
    },
    text: {
        fontSize: 24,
    },
    button: {
      position: 'absolute',
      top: 10,
      left: 10,
      padding: 10,
      backgroundColor: '#007AFF',
      borderRadius: 25,
      elevation: 5,
    },
  });