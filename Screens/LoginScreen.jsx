import { StyleSheet, View, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../constants";
import SignInWithOAuth from "../Components/SignInWithOAuth";
import { Text } from "native-base";

const LoginScreen = ({ navigation }) => {
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
      {/* <Button
        bg={COLORS.lightGrey}
        rounded={"3xl"}
        display={"flex"}
        flexDirection={"row"}
        _pressed={{
          backgroundColor: COLORS.white,
        }}
      >
        <Text display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Ionicons name="logo-google" size={20} color={COLORS.mediumDeep} />
          {"  "}
          <Text
            fontSize={SIZES.small + 2}
            fontWeight={"extrabold"}
            color={COLORS.mediumDeep}
          >
            Continue with Google
          </Text>
        </Text>
      </Button> */}
      <Text
        fontFamily={"meriendaBold"}
        fontSize={SIZES.xl - 2}
        mb={4}
        color={COLORS.lightGrey}
      >
        Welcome back
      </Text>
      <SignInWithOAuth />
      {/* <ActivityIndicator size="large" color={COLORS.lightGrey} /> */}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.deep,
    alignItems: "center",
    justifyContent: "center",
  },
});
