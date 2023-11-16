import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../constants";
import Header from "../Components/HomeScreen/Header";
import InfoCard from "../Components/HomeScreen/InfoCard";
import HorizontalView from "../Components/HomeScreen/HorizontalView";
import { ScrollView, Text } from "native-base";
import ListView from "../Components/HomeScreen/ListView";
import { useUser } from "@clerk/clerk-expo";

const HomeScreen = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [data, setData] = useState([]);

  const URL = "https://ugo-market-server.onrender.com";

  const getData = async () => {
    try {
      const response = await fetch(`${URL}/api/products`);
      const parseOrders = await response.json();
      setData(parseOrders);
      console.log(parseOrders); // Use parseOrders here instead of data
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* info card */}
        <InfoCard />
        {/* latest */}
        <View>
          <Text px={SIZES.small} fontSize={SIZES.small} fontWeight={"black"}>
            Latest
          </Text>
          <HorizontalView data={[...data].sort((a, b) => b.id - a.id)} />
        </View>
        <View>
          <ListView data={[...data].sort((a, b) => a.id - b.id)} />
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
