import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { COLORS, SIZES } from "../constants";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/beadbg2.jpg")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.2,
        }}
      />
      <Text
        style={{
          fontSize: SIZES.large,
          fontWeight: "bold",
          color: COLORS.lightGrey,
        }}
      >
        Welcome To
      </Text>
      <Text
        style={{
          fontSize: SIZES.xxl,
          color: COLORS.lightGrey,
          fontFamily: "meriendaExtra",
        }}
      >
        UGOSTRINGS
      </Text>
      <Text
        style={{
          fontSize: SIZES.large,
          fontWeight: "bold",
          color: COLORS.lightGrey,
          marginBottom: SIZES.large,
        }}
      >
        Marketplace
      </Text>
      <ActivityIndicator size="large" color={COLORS.lightGrey} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.deep,
    alignItems: "center",
    justifyContent: "center",
  },
});
