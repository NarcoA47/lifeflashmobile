import React from 'react'
import { View, Button, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationBar from '../components/LnavigationBarComponent';
import HeaderComponentBooking from '../components/bookings/LheaderComponent';
import BodyLeadComponent from '../components/bookings/LbodyLeadComponent';
import TextManagerComponentBookings from '../components/bookings/LtextManagerComponent';
// import ButtonComponentManager from '../components/LButtonComponent';
import ButtonComponentController from '../components/LButtonComponentController';

function BookingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponentBooking/>
      <BodyLeadComponent/>
      <TextManagerComponentBookings/>
      <ButtonComponentController/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    
  }
});


export default BookingScreen
