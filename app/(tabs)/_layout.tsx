
import React from 'react';
import { Tabs } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, customColors } from '@/constants/Colors';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import AppBar from '../appBar';

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
  const colorsScheme = customColors;

  return (
    <Tabs
      screenOptions={({ navigation }) => ({
        header: () => <AppBar navigation={navigation} />,  // Custom header with drawer button
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={colorsScheme.button} />
        ),
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
      })}
      >
      <Tabs.Screen
        name="index"
        options={({ navigation }) => ({
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            color: colorsScheme.tabIconDefault, // Change this to the color you want
          },
          headerLeft: () => (
            <Feather
              name="menu"
              size={24}
              color="black"
              onPress={() => navigation.openDrawer()} 
              style={{ marginLeft: 15 }}
            />
          ),
          headerRight: () => (
            <Feather
              name="user"
              size={24}
              color="black"
              onPress={() => {
              }}
              style={{ marginRight: 15 }}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            // <FontAwesome name={focused ? 'wpexplorer' : 'wpexplorer'} size={24} color={color} />
            // <AntDesign name={focused ? 'star' : 'staro'} size={24} color={colorsScheme.accent} />
            <AntDesign name="medicinebox" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            color: colorsScheme.tabIconDefault, // Change this to the color you want
          },
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="google-maps" size={42} color={colorsScheme.surface} />
          ),
          tabBarButton: (props) => (
            <MapTabButton {...props}/>
          ),
          tabBarLabelStyle: {
            color: colorsScheme.button, // Change this to the color you want
          },
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color, focused }) => (
            // <FontAwesome6 name={focused ? 'star-of-life' : 'star-of-life'} color={color} />
            // <Ionicons name={focused ? 'tv' : 'tv-outline'} size={26} color={colorsScheme.accent} />
            <Feather name="calendar" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            color: colorsScheme.tabIconDefault, // Change this to the color you want
          },
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help',
          tabBarIcon: ({ color, focused }) => (
            // <FontAwesome6 name={focused ? 'star-of-life' : 'star-of-life'} color={color} />
            // <Ionicons name={focused ? 'game-controller' : 'game-controller-outline'} size={24} color={colorsScheme.accent} />
            <MaterialIcons name="help-outline" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            color: colorsScheme.tabIconDefault, // Change this to the color you want
          },
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