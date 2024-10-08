import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer, Divider, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { logoutUser } from '../middleware/apiConfig';
import { useColorScheme } from '@/hooks/useColorScheme.web'; // Custom hook for color scheme
import IconMenue from './LiconCompoent';

import AntDesign from '@expo/vector-icons/AntDesign';

export default function CustomDrawerContent({ navigation }) {
    const colorScheme = useColorScheme();
    const color = colorScheme === 'dark' ? '#ffffff' : '#687076'; // Set color based on scheme

    const handleLogout = async () => {
        try {
            await logoutUser();
            navigation.navigate('index');
        } catch (error) {
            Alert.alert('Logout Failed', 'Unable to logout. Please try again.');
        }
    };

    return (
        <DrawerContentScrollView style={styles.container}>
            <View style={styles.header}>
            <IconMenue/>
            {/* <Text style={styles.headerText}>LifeFlash</Text> */}
            </View>

            <Divider style={styles.divider} />

            <Drawer.Section style={styles.drawerSection}>
                <TouchableRipple onPress={() => navigation.navigate('(tabs)')}>
                    <View style={styles.drawerItem}>
                        <Icon name="home-outline" size={24} color={color} />
                        <Text style={styles.drawerLabel}>Home</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={() => navigation.navigate('about')}>
                    <View style={styles.drawerItem}>
                        {/* <Icon name="cog-outline" size={24} color={color} /> */}
                        <AntDesign name="infocirlceo" size={24} color={color}/>
                        <Text style={styles.drawerLabel}>About us</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={() => navigation.navigate('settings')}>
                    <View style={styles.drawerItem}>
                        <Icon name="cog-outline" size={24} color={color} />
                        <Text style={styles.drawerLabel}>Settings</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={handleLogout}>
                    <View style={styles.drawerLogoutItem}>
                        <Icon name="logout" size={24} color={color} />
                        <Text style={styles.drawerLabel}>Logout</Text>
                    </View>
                </TouchableRipple>


            </Drawer.Section>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7', // Slightly lighter background for a modern look
    },
    header: {
        // flexDirection: 'row',
        padding: 20,
        // alignItems: 'center', // Center avatar and text
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    divider: {
        marginVertical: 10,
    },
    drawerSection: {
        marginTop: 15,
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    drawerLogoutItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 450,
    },
    drawerLabel: {
        fontSize: 18,
        marginLeft: 15, // Space between icon and label
    },
});
