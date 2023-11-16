import { View, Text, Box, FlatList, HStack, VStack, Image } from "native-base";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ListOrders = ({ data }) => {
  const navigation = useNavigation();
  // const data = [
  //   {
  //     id: 1,
  //     name: "Black bead medium size",
  //     imageUrl:
  //       "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
  //     price: 2000,
  //     quantity: 2,
  //     total: 4000,
  //     destination: "lorem ipsum dolor si amet",
  //   },
  //   {
  //     id: 2,
  //     name: "Red bead medium size",
  //     imageUrl:
  //       "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
  //     price: 3000,
  //     quantity: 2,
  //     total: 6000,
  //     destination: "lorem ipsum dolor si amet",
  //   },
  //   {
  //     id: 3,
  //     name: "Green bead medium size",
  //     imageUrl:
  //       "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
  //     price: 2500,
  //     quantity: 2,
  //     total: 5000,
  //     destination: "lorem ipsum dolor si amet",
  //   },
  //   {
  //     id: 4,
  //     name: "Gold bead medium size",
  //     imageUrl:
  //       "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
  //     price: 2000,
  //     quantity: 2,
  //     total: 4000,
  //     destination: "lorem ipsum dolor si amet",
  //   },
  //   {
  //     id: 5,
  //     name: "Royal Blue bead medium size",
  //     imageUrl:
  //       "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
  //     price: 5000,
  //     quantity: 2,
  //     total: 10000,
  //     destination: "lorem ipsum dolor si amet",
  //   },
  //   {
  //     id: 6,
  //     name: "Black & Gold bead medium size",
  //     imageUrl:
  //       "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
  //     price: 5000,
  //     quantity: 2,
  //     total: 10000,
  //     destination: "lorem ipsum dolor si amet",
  //   },
  // ];
  // const data = [];

  return (
    <View>
      <View>
        <HStack
          space={2}
          bg={COLORS.white}
          h={"auto"}
          p={1}
          mb={2}
          rounded={"lg"}
          shadow={"1"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HStack space={2} alignItems={"center"}>
            <Image
              source={{ uri: data.imageUrl }}
              alt=""
              w={"16"}
              h={"16"}
              resizeMode="cover"
              rounded={"lg"}
            />
            <View style={{ width: "auto" }}>
              <Text fontWeight={"black"} numberOfLines={1}>
                {data.name}
              </Text>
              <Text fontWeight={"bold"} fontSize={SIZES.small - 2}>
                ₦ {data.price}
              </Text>
              <Text fontSize={SIZES.tiny}>quantity: {data.quantity}</Text>
            </View>
          </HStack>
          <TouchableOpacity
            style={{ paddingHorizontal: 15 }}
            onPress={() => navigation.navigate("OrderDetails", data)}
          >
            <AntDesign name="eye" color={COLORS.deep} size={SIZES.medium} />
          </TouchableOpacity>
        </HStack>
      </View>
    </View>
  );
};

export default ListOrders;
