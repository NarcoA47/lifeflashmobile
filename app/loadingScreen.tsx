import { customColors } from '@/constants/Colors';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function LoadingScreen() {

    const colorsScheme = customColors;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colorsScheme.button} />
      <Text style={styles.loadingText}>Signing in, please wait...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
  },
});
