import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/Drawer";

const getFonts = () =>
  Font.loadAsync({
    "playfair-regular": require("./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
    "playfair-bold": require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return fontsLoaded ? (
    <Navigator />
  ) : (
    <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
  );
}
