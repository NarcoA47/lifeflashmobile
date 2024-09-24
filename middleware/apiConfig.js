import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'https://icons-backend.onrender.com/api/v1/';

export async function signInUser(username, password) {
  try {
    const response = await axios.post(`${API_BASE_URL}auth/login/`, {
      username,
      password
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const { token } = response.data;

    // Store the token in AsyncStorage
    await AsyncStorage.setItem('authToken', token);

    // Retrieve and log the auth token after login
    const authToken = await AsyncStorage.getItem('authToken');
    console.log('Auth Token:', authToken);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
}

// Function to sign up a user
export async function signUpUser(username, email, password) {
  try {
    const response = await axios.post(`${API_BASE_URL}users/`, {
      username,
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
}

// Function to log out a user
export async function logoutUser() {
  try {
    // Retrieve the stored token from AsyncStorage
    const token = await AsyncStorage.getItem('authToken');

    if (!token) {
      throw new Error('No token found');
    }

    await axios.post(`${API_BASE_URL}auth/logout/`, {}, {
      headers: {
        'Authorization': `Token ${token}`, 
        'Content-Type': 'application/json',
      }
    });
    await AsyncStorage.removeItem('authToken');
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
}

export const sendResetPasswordEmail = async (email) => {
  try {
    const response = await axios.post('/api/reset-password', { email });
    return response.data;  
  } catch (error) {
    console.error('Error sending reset password email:', error);
    return { success: false };
  }
};


export async function fetchUserProfile(userId) {
  try {
    const token = await AsyncStorage.getItem('authToken');

    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.get(`${API_BASE_URL}users/${userId}/`, {
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json',
      }
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
}

export async function changePassword(oldPassword, newPassword, confirmPassword) {
  try {
    const response = await axios.post(`${API_BASE_URL}change-password/`, {
      old_password: oldPassword,
      new_password: newPassword,
      confirm_password: confirmPassword
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`  
      }
    });

    console.log('Password change response:', response.data);
  } catch (error) {
    console.error('Error changing password:', error.response ? error.response.data : error.message);
  }
}