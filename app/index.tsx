import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Text, Button, TextInput, Card, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from 'expo-router';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { customColors } from '@/constants/Colors';
import { signInUser } from '../middleware/apiConfig';
import LoadingScreen from './loadingScreen';

WebBrowser.maybeCompleteAuthSession();

export default function StartingScreen() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [error, setError] = useState(''); 
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false); 
    const colorsScheme = customColors;
    const { colors } = useTheme(); 

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: 'YOUR_GOOGLE_CLIENT_ID', // Replace this with your Google OAuth Client ID
    });

    const handleSignIn = async () => {
        setError('');  
        setIsError(false); 
        setLoading(true); 

        try {
            const response = await signInUser(username, password);
            if (response && response.success) {
                setError('Incorrect username or password.');
                setIsError(true);  
                setLoading(false); 
            } else {
                navigation.navigate('(tabs)');
            }
        } catch (error) {
            setError('Sign-in failed. Please try again.');
            setIsError(true); 
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await promptAsync();
            if (result?.type === 'success') {
                const { authentication } = result;
                Alert.alert('Google Sign-In', 'Sign-in successful!');
                // You can handle authentication token here
                // e.g., send it to your backend for verification
            } else {
                Alert.alert('Google Sign-In', 'Sign-in failed');
            }
        } catch (error) {
            Alert.alert('Google Sign-In Error', error.message);
        }
    };

    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    if (loading) {
        return <LoadingScreen />;  
    }

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Image style={styles.icon} source={require('../assets/icons/Ticon.png')} />
                    <Text style={styles.title}>Welcome to LifeFlash</Text>
                    <TextInput
                        label="Username"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        mode="outlined"
                        theme={{
                          colors: {
                            primary: customColors.button,
                            error: customColors.error,  
                          },
                          fonts: {
                            regular: { fontFamily: 'GeistSans', fontWeight: '400' },
                          },
                        }}
                        error={isError}
                    />
                    <View style={styles.passwordContainer}>
                        <TextInput
                            label="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            mode="outlined"
                            secureTextEntry={secureTextEntry}
                            theme={{
                              colors: {
                                primary: customColors.button,
                                error: customColors.error,  
                              },
                              fonts: {
                                regular: { fontFamily: 'GeistSans', fontWeight: '400' },
                              },
                            }}
                            error={isError}
                        />
                        <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.eyeIcon}>
                            <Icon name={secureTextEntry ? "eye-outline" : "eye-off-outline"} size={24} color={colorsScheme.button} />
                        </TouchableOpacity>
                    </View>
                    {isError && <Text style={styles.errorText}>{error}</Text>}
                    <Button
                        mode="contained"
                        style={styles.signinbutton}
                        onPress={handleSignIn}
                        theme={{
                          colors: {
                            primary: customColors.button,
                            text: customColors.text,
                          },
                          fonts: {
                            regular: { fontFamily: 'GeistSans', fontWeight: '800' },
                          },
                        }}
                    >
                        Sign In
                    </Button>

                    {/* <Button
                        mode="outlined"
                        style={styles.button}
                        onPress={handleGoogleSignIn}
                        theme={{
                          colors: {
                            primary: customColors.button,
                            text: customColors.text,
                          },
                          fonts: {
                            regular: { fontFamily: 'GeistSans', fontWeight: '800' },
                          },
                        }}
                        disabled={!request}
                    >
                        Sign In with Google
                    </Button> */}

                    <Button
                        mode="outlined"
                        style={styles.button}
                        onPress={() => navigation.navigate('signup')}
                        theme={{
                          colors: {
                            primary: customColors.button,
                            text: customColors.text,
                          },
                          fonts: {
                            regular: { fontFamily: 'GeistSans', fontWeight: '800' },
                          },
                        }}
                    >
                        Sign Up
                    </Button>

                    <TouchableOpacity onPress={() => navigation.navigate('forgetpassword')} style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    icon: {
        alignSelf: 'center',
        marginBottom: 20,
        width: 100,
        height: 100,
    },
    card: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    passwordContainer: {
        position: 'relative',
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: 15,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
    button: {
        marginVertical: 10,
    },
    signinbutton: {
        marginTop: 20,
    },
    forgotPassword: {
        alignItems: 'center',
        marginTop: 20,
    },
    forgotPasswordText: {
        fontWeight: 'bold',
    },
});
