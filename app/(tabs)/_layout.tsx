import { Tabs } from 'expo-router';
import React from 'react';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import MenuButton from '../components/LmenuCompont';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const MapTabButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
        }}
        onPress={onPress}
        >
        <View style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#03BB72'
        }}
        >
          {children}
        </View>
    </TouchableOpacity>
  )
}

export default function TabLayout() {

  return (
    
      <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 55,
          paddingBottom: 5,
          ...styles.shadow,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="home" size={24} color='black' />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="medical-services" size={24} color='black' />
          ),
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="google-maps" size={42} color="white" />
          ),
          tabBarButton: (props) => (
            <MapTabButton {...props}/>
          )
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color, focused }) => (
            <Feather name="calendar" size={24} color='black' />
          ),
        }}
      />
      
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="help-outline" size={24} color='black' />
          ),
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#30B3FF',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 8,
  }
})