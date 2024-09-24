import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { customColors } from '@/constants/Colors';

function AppBar({ navigation }) {
  const colorsScheme = customColors;

  const handleNavigate = () => {
    navigation.navigate('profile', { userId: 2 });
  };

  return (
    <Appbar.Header style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.icon}>
        <Ionicons name="menu" size={35} color={colorsScheme.button} />
      </TouchableOpacity>
      <View style={styles.centerContent}>
        <Appbar.Content title="" />
      </View>
      <TouchableOpacity onPress={handleNavigate} style={styles.icon}>
        <FontAwesome name="user-circle-o" size={35} color={colorsScheme.button} />
      </TouchableOpacity>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
  },
});

export default AppBar;
