import React from 'react'
import { View, Button, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../components/LnavigationBarComponent';

function ServiceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar navigation={undefined}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    
  }
});


export default ServiceScreen
