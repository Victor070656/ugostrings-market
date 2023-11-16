import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  Box,
  FlatList,
  HStack,
  Image,
  ScrollView,
  Text,
  View,
} from "native-base";
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const HorizontalView = ({ data }) => {
  const navigation = useNavigation();
  // const data = [
  //   {
  //     id: 1,
  //     name: "Black bead medium size",
  //     imageUrl:
  //       "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
  //     price: 2000,
  //     description: "lorem ipsum dolor si amet",
  //   },
  //   {
  //     id: 2,
  //     name: "Red bead medium size",
  //     imageUrl:
  //       "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
  //     price: 3000,
  //     description: "lorem ipsum dolor si amet",
  //   },
  //   {
  //     id: 3,
  //     name: "Green bead medium size",
  //     imageUrl:
  //       "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
  //     price: 2500,
  //     description: "lorem ipsum dolor si amet",
  //   },
  //   {
  //     id: 4,
  //     name: "Gold bead medium size",
  //     imageUrl:
  //       "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
  //     price: 2000,
  //     description: "lorem ipsum dolor si amet",
  //   },
  //   {
  //     id: 5,
  //     name: "Royal Blue bead medium size",
  //     imageUrl:
  //       "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
  //     price: 5000,
  //     description: "lorem ipsum dolor si amet",
  //   },
  //   {
  //     id: 6,
  //     name: "Black & Gold bead medium size",
  //     imageUrl:
  //       "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
  //     price: 5000,
  //     description: "lorem ipsum dolor si amet",
  //   },
  // ];
  return (
    <Box px={SIZES.small}>
      <FlatList
        data={data}
        renderItem={(item) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Details", item.item)}
          >
            <View
              mr={2}
              rounded={SIZES.small}
              w={130}
              bg={COLORS.mediumDeep}
              shadow={"1"}
            >
              <Image
                source={{ uri: item.item.imageUrl }}
                alt={item.item.name}
                resizeMode="cover"
                rounded={SIZES.tiny}
                opacity={0.6}
                style={{ width: "100%", height: "100%" }}
              />
              <View position={"absolute"} bottom={2} px={2}>
                <Text
                  fontWeight={"bold"}
                  numberOfLines={1}
                  fontSize={SIZES.small - 2}
                  color={COLORS.white}
                  mt={1}
                >
                  {item.item.name}
                </Text>
                <Text
                  fontWeight={"bold"}
                  numberOfLines={1}
                  fontSize={SIZES.small}
                  color={COLORS.white}
                  mt={1}
                  lineHeight={SIZES.small}
                >
                  ₦ {item.item.price}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        _contentContainerStyle={{
          height: 170,
          paddingY: 2,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  );
};

export default HorizontalView;
