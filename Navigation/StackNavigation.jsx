import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../Screens/SplashScreen";
import TabNavigation from "./TabNavigation";
import LoginScreen from "../Screens/LoginScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import PaymentScreen from "../Screens/PaymentScreen";
import OrderDetailScreen from "../Screens/OrderDetailScreen";

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="OrderDetails" component={OrderDetailScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
