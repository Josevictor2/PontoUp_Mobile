import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { NativeBaseProvider } from 'native-base';

import useCachedResources from './src/hooks/useCachedResources';
import { theme } from './src/theme';
import { Router } from './src/routes/Router';
import { AuthProvider } from './src/contexts/Auth';
import { ModalContextProvider } from './src/contexts/Modal';

export default function App() {
  const isLoadingComplete = useCachedResources();

  const config = {
    dependencies: {
      'linear-gradient': LinearGradient,
    },
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider config={config} theme={theme}>
        <SafeAreaProvider>
          <StatusBar
            barStyle={'dark-content'}
            translucent
            backgroundColor="transparent"
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
}
