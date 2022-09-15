import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components";

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import Home from "./pages/Home";
import Login from "./pages/Login";
import theme from "./styles/theme";
import { View } from "react-native-animatable";
import CardDetails from "./pages/CarDetails";
import Scheduling from "./pages/Scheduling";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontesLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontesLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontesLoaded]);

  if (!fontesLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View onLayout={onLayoutRootView} />
      <Scheduling />
    </ThemeProvider>
  );
}
