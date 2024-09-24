import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Avatar, Card, useTheme, ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fetchUserProfile } from '../middleware/apiConfig';
import { customColors } from '@/constants/Colors';

export default function ProfileScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const colorsScheme = customColors;

  const route = useRoute();
  const { userId } = route.params || {}; 

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await fetchUserProfile(userId);
        setUser(profileData);
      } catch (err) {
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [userId]);

  const handleEditProfile = () => {
    navigation.navigate('edit');
  };

  const handleDeleteProfile = () => {
   
  };

  const handleLogout = () => {
  };

  if (loading) {
    return <ActivityIndicator animating={true} size="large" style={styles.loader} color={colorsScheme.button}  />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  if (!user) {
    return <Text style={styles.error}>No user data available</Text>;
  }

  const profileImage = user.user_profile?.user_image ? { uri: user.user_profile.user_image } : 'https://via.placeholder.com/100';
  const userRole = user.user_profile?.role || 'N/A';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Avatar.Image size={100} color={colorsScheme.button}  source={{ uri: profileImage }} />
        <Text style={styles.name}>{user.username}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.row}>
            <Icon name="account-outline" size={24} color={colorsScheme.button} />
            <Text style={styles.fieldValue}>Username: {user.username}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email-outline" size={24} color={colorsScheme.button} />
            <Text style={styles.fieldValue}>Email: {user.email}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="map-marker-outline" size={24} color={colorsScheme.button} />
            <Text style={styles.fieldValue}>Role: {user.user_profile?.role || 'N/A'}</Text>
          </View>
        </Card.Content>
      </Card>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleEditProfile}
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
          Edit Profile
        </Button>
        <Button
          mode="contained"
          onPress={handleDeleteProfile}
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
          Delete Profile
        </Button>
        <Button
          mode="outlined"
          onPress={handleLogout}
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
          Log Out
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: '#888',
  },
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  fieldValue: {
    marginLeft: 15,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    marginBottom: 15,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
