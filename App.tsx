import 'react-native-gesture-handler';
import React from 'react';
import { NativeBaseProvider } from "native-base";
import useCachedResources from './src/hooks/useCachedResources';
import { StatusBar } from 'react-native';
import { theme } from './src/theme';
import { Router } from './src/routes/Router';
import { AuthProvider } from './src/contexts/Auth';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar
            barStyle={"dark-content"}
            translucent
            backgroundColor="#ffffff"
          />
          <AuthProvider>
            <Router />
          </AuthProvider>
        </SafeAreaProvider>
      </NativeBaseProvider>
    );
  }
}
