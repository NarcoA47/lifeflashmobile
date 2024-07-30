import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler';
import NavigationBar from '../components/LnavigationBarComponent';
import ImageHeader from '../components/LheaderComponent';
import TextManager from '../components/LtextManager';

export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar navigation={undefined}/>
      <ImageHeader/>
      <TextManager/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  }

});
