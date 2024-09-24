import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Switch, Card } from 'react-native-paper';

export default function SettingsScreen() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Settings</Text>
          
          <View style={styles.settingItem}>
            <Text>Enable Notifications</Text>
            <Switch
              value={isNotificationsEnabled}
              onValueChange={setIsNotificationsEnabled}
            />
          </View>

          <View style={styles.settingItem}>
            <Text>Dark Mode</Text>
            <Switch
              value={isDarkMode}
              onValueChange={setIsDarkMode}
            />
          </View>
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
  },
  card: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});
