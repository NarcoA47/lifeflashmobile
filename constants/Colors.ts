/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#036B72';
const tintColorDark = '#fff';
const tintOriginalColor = '#03BB72'

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintOriginalColor,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const customColors = {
  primary: '#007910FF',
  accent: '#007910FF',
  background: '#f5f5f5',
  surface: '#ffffff',
  error: '#B30000FF',
  text: '#000000',
  placeholder: '#9e9e9e',
  tabIconDefault: '#687076',
  button: '#03BB72',
};