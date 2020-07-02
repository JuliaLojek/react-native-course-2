import React, { useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/Home";
import { AppLoading } from "expo";

const getFonts = () =>
  Font.loadAsync({
    "playfair-regular": require("./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
    "playfair-bold": require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return fontsLoaded ? (
    <Home />
  ) : (
    <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
  );
}
