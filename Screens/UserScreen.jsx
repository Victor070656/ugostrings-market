import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderSection from "../Components/UserScreen/HeaderSection";
import { Box } from "native-base";

const UserScreen = () => {
  return (
    <View>
      {/* header */}
      <HeaderSection />
      {/*  */}
      {/* orders */}
      <Box>
        <Text>Orders</Text>
      </Box>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
