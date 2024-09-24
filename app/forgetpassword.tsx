import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, Button, TextInput, Card, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { sendResetPasswordEmail } from '../middleware/apiConfig'; // API call function
import { useNavigation } from 'expo-router';
import { customColors } from '@/constants/Colors';

export default function ForgotPasswordScreen() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isError, setIsError] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const colorsScheme = customColors;
    const { colors } = useTheme();
    const navigation = useNavigation();

    const handleForgotPassword = async () => {
        setError('');
        setIsError(false);
        setSuccessMessage('');

        try {
        const response = await sendResetPasswordEmail(email);
        if (response && response.success) {
            setSuccessMessage('Password reset link sent to your email.');
        } else {
            setError('Failed to send reset link. Please try again.');
            setIsError(true);
        }
        } catch (error) {
        setError('An error occurred. Please try again.');
        setIsError(true);
        }
    };

  return (
    <View style={styles.container}>
      {/* <Icon name="lock-reset" size={100} color={colors.button} style={styles.icon} /> */}
      <Image style={styles.icon} source={require('../assets/icons/Ticon.png')}/>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Forgot Password</Text>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            error={isError}
            theme={{
              colors: { primary: customColors.button, error: colors.error },
              fonts: { regular: { fontFamily: 'GeistSans', fontWeight: '400' } },
            }}
          />
          {isError && <Text style={styles.errorText}>{error}</Text>}
          {successMessage && <Text style={styles.successText}>{successMessage}</Text>}
        </Card.Content>
      </Card>
      <Button 
      mode="contained"
    theme={{
        colors: {
            primary: customColors.button,
            text: customColors.text
        },
        fonts: {
            regular: { fontFamily: 'GeistSans', fontWeight: '800' },
            },
        }} 
        onPress={handleForgotPassword}
        >
        Send Reset Link
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('index')} style={styles.signInLink}>
        <Text style={styles.signInText}>Back to Sign In</Text>
      </TouchableOpacity>
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  successText: {
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
  },
  signInLink: {
    alignItems: 'center',
    marginTop: 20,
  },
  signInText: {
    fontWeight: 'bold',
  },
});
