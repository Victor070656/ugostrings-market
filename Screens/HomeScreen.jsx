import { StyleSheet, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import Header from "../Components/HomeScreen/Header";
import InfoCard from "../Components/HomeScreen/InfoCard";
import HorizontalView from "../Components/HomeScreen/HorizontalView";
import { ScrollView, Text } from "native-base";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <ScrollView>
        {/* info card */}
        <InfoCard />
        {/* latest */}
        <View>
          <Text px={SIZES.small} fontSize={SIZES.small} fontWeight={"black"}>
            Latest
          </Text>
          <HorizontalView />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
  },
});
