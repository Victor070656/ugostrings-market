import { StyleSheet, View, Image, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { COLORS, SIZES } from "../constants";
import { Button, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import SignInWithOAuth from "../Components/SignInWithOAuth";

const LoginScreen = ({ navigation }) => {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigation.navigate("Home");
  //     }, 5000);
  //   }, []);

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
