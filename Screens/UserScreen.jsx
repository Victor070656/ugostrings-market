import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderSection from "../Components/UserScreen/HeaderSection";
import { Box, ScrollView, Text, VStack } from "native-base";
import { COLORS, SIZES } from "../constants";
import ListOrders from "../Components/UserScreen/ListOrders";
import { useUser } from "@clerk/clerk-expo";

const UserScreen = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [data, setData] = useState([]);

  const URL = "https://ugo-market-server.onrender.com";

  const getData = async () => {
    try {
      const response = await fetch(`${URL}/api/orders`);
      const parseOrders = await response.json();
      setData(
        parseOrders.filter(
          (e) => e.email === user.primaryEmailAddress.toString()
        )
      );
      console.log(parseOrders); // Use parseOrders here instead of data
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <ScrollView>
        {/* header */}
        <HeaderSection />
        {/* orders */}
        <Box px={SIZES.small}>
          <Text fontWeight={"extrabold"} color={"#333"}>
            Orders
          </Text>
          <Box mt={2}>
            {data && data.length === 0 && (
              <Box>
                <Text>No Orders Yet</Text>
              </Box>
            )}
            {data.map((item) => {
              return (
                <View key={item.id}>
                  <ListOrders data={item} />
                </View>
              );
            })}
          </Box>
        </Box>
      </ScrollView>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
