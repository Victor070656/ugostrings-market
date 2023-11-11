import { StyleSheet } from "react-native";
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

const HorizontalView = () => {
  const data = [
    {
      id: 1,
      name: "Black bead medium size",
      imageUrl:
        "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
      price: 2000,
    },
    {
      id: 2,
      name: "Red bead medium size",
      imageUrl:
        "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
      price: 3000,
    },
    {
      id: 3,
      name: "Green bead medium size",
      imageUrl:
        "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
      price: 2500,
    },
    {
      id: 4,
      name: "Gold bead medium size",
      imageUrl:
        "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
      price: 2000,
    },
    {
      id: 5,
      name: "Royal Blue bead medium size",
      imageUrl:
        "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
      price: 5000,
    },
    {
      id: 6,
      name: "Black & Gold bead medium size",
      imageUrl:
        "https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg",
      price: 5000,
    },
  ];
  return (
    <Box px={SIZES.small}>
      <FlatList
        data={data}
        renderItem={(item) => (
          <View
            mr={2}
            px={1}
            py={1}
            rounded={"2xl"}
            w={130}
            bg={COLORS.white}
            shadow={"3"}
          >
            <Image
              source={{ uri: item.item.imageUrl }}
              alt={item.item.name}
              resizeMode="cover"
              rounded={SIZES.tiny}
              style={{ width: "100%", height: 100 }}
            />
            <Text
              fontWeight={"bold"}
              numberOfLines={1}
              fontSize={SIZES.small - 2}
              color={COLORS.mediumDeep}
              mt={1}
            >
              {item.item.name}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        _contentContainerStyle={{
          height: 170,
          paddingY: 2,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        gap={2}
      />
    </Box>
  );
};

export default HorizontalView;

const styles = StyleSheet.create({});
