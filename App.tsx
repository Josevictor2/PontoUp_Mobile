import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { NativeBaseProvider } from 'native-base';

import { LoadingFonts } from './src/components/Loading';
import { theme } from './src/theme';
import { Router } from './src/routes/Router';
import { AuthProvider } from './src/contexts/Auth';
import { ModalContextProvider } from './src/contexts/Modal';
import {
  Sora_100Thin,
  Sora_200ExtraLight,
  Sora_300Light,
  Sora_400Regular,
  useFonts,
} from '@expo-google-fonts/sora';

export default function App() {
  const config = {
    dependencies: {
      'linear-gradient': LinearGradient,
    },
  };

  const [isLoadingComplete] = useFonts({
    Sora_100Thin,
    Sora_200ExtraLight,
    Sora_300Light,
    Sora_400Regular,
  });

  if (!isLoadingComplete) {
    return (
      <NativeBaseProvider config={config} theme={theme}>
        <SafeAreaProvider>
          <StatusBar
            barStyle={'dark-content'}
            translucent
            backgroundColor="transparent"
          />
          <LoadingFonts />
        </SafeAreaProvider>
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider config={config} theme={theme}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor="white"
        />
        <AuthProvider>
          <ModalContextProvider>
            <Router />
          </ModalContextProvider>
        </AuthProvider>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
