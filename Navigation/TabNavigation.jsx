import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import SearchScreen from "../Screens/SearchScreen";
import UserScreen from "../Screens/UserScreen";
import { COLORS } from "../constants";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Ionicons name="md-home" size={24} color={color} />
            ) : (
              <Ionicons name="md-home-outline" size={24} color={color} />
            ),
          tabBarActiveTintColor: COLORS.deep,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Ionicons name="search" size={24} color={color} />
            ) : (
              <Ionicons name="search-outline" size={24} color={color} />
            ),
          tabBarActiveTintColor: COLORS.deep,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <FontAwesome name="user-circle" size={24} color={color} />
            ) : (
              <FontAwesome name="user-circle-o" size={24} color={color} />
            ),
          tabBarActiveTintColor: COLORS.deep,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
