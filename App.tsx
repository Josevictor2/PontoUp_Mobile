import React from 'react';
import { Home } from './src/components/Home';
import { NativeBaseProvider } from "native-base";
import useCachedResources from './src/hooks/useCachedResources';
import { StatusBar } from 'react-native';
import { theme } from './src/theme';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <StatusBar
          barStyle={"dark-content"}
          translucent
          backgroundColor="transparent"
        />
        <Home />
      </NativeBaseProvider>
    );
  }
}
