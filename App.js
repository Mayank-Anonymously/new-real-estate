import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Main";
const App = () => {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Hind-Jalandhar": require("./assets/fonts/Hind/Hind-Regular.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

export default App;
