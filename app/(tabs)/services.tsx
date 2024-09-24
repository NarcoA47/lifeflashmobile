import React from 'react'
import { View, Button, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../components/LnavigationBarComponent';
import TextManagerComponentServices from '../components/services/LtextManagerComponent';
import  BannerComponent from '../components/services/LbannerComponent';
import StepComponent from '../components/services/LstepComponent';

function ServiceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <NavigationBar navigation={undefined}/> */}
      <TextManagerComponentServices/>
      <BannerComponent/>
      <StepComponent/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    
  }
});


export default ServiceScreen
