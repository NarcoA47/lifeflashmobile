import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, Divider, Card } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AboutScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/icons/Ticon.png')} // Replace with your logo image path
          style={styles.logo}
        />
        <Text variant="headlineLarge" style={styles.title}>About LIFEFLASH</Text>
      </View>
      
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.subtitle}>Revolutionizing Your Access to Medical Care</Text>
        
        <Card style={styles.versionCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.versionTitle}>Current Version</Text>
            <Text variant="headlineMedium" style={styles.versionText}>2.1.0</Text>
          </Card.Content>
        </Card>

        <Text variant="bodyLarge" style={styles.description}>
          Discover the future of healthcare with LIFEFLASH!
        </Text>
        
        <Text variant="bodyLarge" style={styles.description}>
          Version 2.1.0 brings you the most seamless and intuitive way to access medical care anytime, anywhere. Whether you're at home, on the go, or traveling, LIFEFLASH ensures that expert medical assistance is just a tap away. Say goodbye to long waits and hello to instant care with our cutting-edge technology and user-friendly interface.
        </Text>
        
        <Text variant="bodyLarge" style={styles.description}>
          Experience unparalleled convenience and peace of mind, knowing that top-notch medical support is always within reach. With LIFEFLASH, your health and safety are our top priorities.
        </Text>
      </View>
      
      <Divider style={styles.divider} />
      
      <View style={[styles.footer, { paddingBottom: insets.bottom }]}>
        <Text variant="bodyMedium" style={styles.footerText}>
          Powered by Geco Games Studios
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#007bff', // Add a color to make it stand out
  },
  content: {
    marginBottom: 20,
  },
  versionCard: {
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    elevation: 2,
  },
  versionTitle: {
    marginBottom: 5,
    color: '#00796b',
  },
  versionText: {
    backgroundColor: '#00796b',
    color: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 12,
    fontSize: 18,
    textAlign: 'center',
  },
  description: {
    marginBottom: 10,
  },
  divider: {
    marginVertical: 20,
    backgroundColor: '#ddd',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    color: '#888',
  },
});

export default AboutScreen;
