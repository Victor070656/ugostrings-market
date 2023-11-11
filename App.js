import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./Navigation/StackNavigation";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";
import { NativeBaseProvider } from "native-base";

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
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden />
        <StackNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
