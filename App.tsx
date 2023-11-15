import { ThemeProvider } from "styled-components/native";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

import { NavigationContainer } from "@react-navigation/native";


import theme from "./src/Styles/theme";
import Routes from "./src/Routes/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
