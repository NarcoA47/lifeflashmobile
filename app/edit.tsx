import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Card, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Adjust import based on your navigation setup
import { customColors } from '@/constants/Colors';

export default function EditProfileScreen() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [nrc, setNrc] = useState('');
    const [location, setLocation] = useState('');
    const navigation = useNavigation();
    const colorsScheme = customColors;

    const handleSave = () => {
        alert('Profile updated successfully');
        navigation.goBack();
    };

    const handleDeleteProfile = () => {
        Alert.alert(
            "Delete Profile",
            "Are you sure you want to delete your profile?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "OK", onPress: () => {
                    // Implement profile delete logic
                    alert('Profile deleted successfully');
                    navigation.goBack();
                }},
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Avatar.Image size={100} source={{ uri: 'https://via.placeholder.com/100' }} />
            </View>
            <Card style={styles.card}>
                <Card.Content>
                    <TextInput
                        label="First Name"
                        value={firstName}
                        onChangeText={setFirstName}
                        style={styles.input}
                        theme={{
                            colors: {
                              primary: customColors.button,
                              error: customColors.error,  
                            },
                            fonts: {
                              regular: { fontFamily: 'GeistSans', fontWeight: '400' },
                            },
                          }}
                        
                    />
                    <TextInput
                        label="Last Name"
                        value={lastName}
                        onChangeText={setLastName}
                        style={styles.input}
                        theme={{
                            colors: {
                              primary: customColors.button,
                              error: customColors.error,  
                            },
                            fonts: {
                              regular: { fontFamily: 'GeistSans', fontWeight: '400' },
                            },
                          }}
                    />
                    <TextInput
                        label="Date of Birth"
                        value={dateOfBirth}
                        onChangeText={setDateOfBirth}
                        style={styles.input}
                        theme={{
                            colors: {
                              primary: customColors.button,
                              error: customColors.error,  
                            },
                            fonts: {
                              regular: { fontFamily: 'GeistSans', fontWeight: '400' },
                            },
                          }}
                        placeholder="YYYY-MM-DD"
                    />
                    <TextInput
                        label="NRC Number"
                        value={nrc}
                        onChangeText={setNrc}
                        style={styles.input}
                        theme={{
                            colors: {
                              primary: customColors.button,
                              error: customColors.error,  
                            },
                            fonts: {
                              regular: { fontFamily: 'GeistSans', fontWeight: '400' },
                            },
                          }}
                    />
                    <TextInput
                        label="Location"
                        value={location}
                        onChangeText={setLocation}
                        style={styles.input}
                        theme={{
                            colors: {
                              primary: customColors.button,
                              error: customColors.error,  
                            },
                            fonts: {
                              regular: { fontFamily: 'GeistSans', fontWeight: '400' },
                            },
                          }}
                    />
                </Card.Content>
            </Card>

            <Button
                mode="contained"
                onPress={handleSave}
                style={styles.button}
                theme={{
                    colors: {
                      primary: customColors.button,
                      text: customColors.text
                    },
                    fonts: {
                      regular: { fontFamily: 'GeistSans', fontWeight: '800' },
                    },
                  }}
            >
                Save
            </Button>

            <Button
                mode="contained"
                onPress={handleDeleteProfile}
                style={[styles.button, styles.deleteButton]}
                theme={{
                    colors: {
                      primary: customColors.error,
                      text: customColors.text
                    },
                    fonts: {
                      regular: { fontFamily: 'GeistSans', fontWeight: '800' },
                    },
                  }}
            >
                Delete Profile
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f7f7f7'
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 20,
    },
    card: {
        marginBottom: 20,
    },
    input: {
        marginBottom: 15,
    },
    button: {
        marginTop: 20,
    },
    deleteButton: {
        marginTop: 10,
    },
});
