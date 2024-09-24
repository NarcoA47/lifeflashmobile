import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorScheme } from '@/hooks/useColorScheme'; // Verify if this is correctly imported
import { Provider as PaperProvider } from 'react-native-paper';
import CustomDrawerContent from '../components/CustomDrawerContent'; // Verify if this is correctly exported
import Feather from '@expo/vector-icons/Feather';

SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider>
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="drawer" options={{ headerShown: false }}>
        {() => (
          <Stack>
            
            <Stack.Screen 
              name="index" 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="profile" 
              options={{ 
                title: '',
              }} 
            />
            <Stack.Screen 
              name="settings" 
              options={{ 
                title: '',
              }} 
            />
            <Stack.Screen 
            name="about" 
            options={{ 
              title: '',
            }} 
            />
            <Stack.Screen 
            name="signup" 
            options={{ headerShown: false }} 
            />
            <Stack.Screen 
            name="(tabs)" 
            options={{ headerShown: false }} 
            />
            <Stack.Screen 
            name="forgetpassword" 
            options={{ headerShown: false }} 
            />
            <Stack.Screen 
            name="edit" 
            options={{ 
              title: '',
            }} 
            />
            <Stack.Screen 
            name="+not-found" 
            />
            
          </Stack>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  </PaperProvider>
  );
}
