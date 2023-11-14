import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./Navigation/StackNavigation";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { CONFIG } from "./constants";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    fugaz: require("./assets/fonts/FugazOne-Regular.ttf"),
    merienda: require("./assets/fonts/Merienda-Regular.ttf"),
    meriendaBold: require("./assets/fonts/Merienda-Bold.ttf"),
    meriendaExtra: require("./assets/fonts/Merienda-Black.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <ClerkProvider publishableKey={CONFIG.KEY}>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar hidden />
          <SignedIn>
            <StackNavigation />
          </SignedIn>
          <SignedOut>
            <LoginScreen />
          </SignedOut>
        </NavigationContainer>
      </NativeBaseProvider>
    </ClerkProvider>
  );
}
