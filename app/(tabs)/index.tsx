import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageHeader from '../components/LheaderComponent';
import TextManager from '../components/LtextManager';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageHeader />
        <TextManager />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure SafeAreaView takes up the full screen
    backgroundColor: '#f7f7f7',
  },
});

