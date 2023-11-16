import { Box, Image, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../../constants";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListView = ({ inputData }) => {
  const navigation = useNavigation();
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

  /**
   * for search
   * the newArray will be mapped out if there is a search
   */

  const newArray = data.filter((e) => {
    let name = e.name.toLowerCase();
    let description = e.description.toLowerCase();
    return (
      name.includes(inputData.toLowerCase()) ||
      description.includes(inputData.toLowerCase())
    );
  });
  // console.log(newArray);

  // search functionality working
  if (newArray != []) {
    return (
      <View px={SIZES.small} py={2}>
        {newArray.map((item) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              key={item.id}
              onPress={() => navigation.navigate("Details", item)}
            >
              <Box
                w={"full"}
                h={200}
                rounded={SIZES.small}
                mb={2}
                bg={COLORS.mediumDeep}
                position={"relative"}
              >
                <Image
                  source={{ uri: item.imageUrl }}
                  w={"full"}
                  h={"full"}
                  rounded={SIZES.small}
                  opacity={0.5}
                  alt=""
                  resizeMode="cover"
                  position={"relative"}
                />
                <View position={"absolute"} bottom={3} px={SIZES.small}>
                  <Text
                    numberOfLines={1}
                    fontWeight={"bold"}
                    fontSize={SIZES.medium}
                    color={COLORS.white}
                    mr={"auto"}
                  >
                    {item.name}
                  </Text>
                  <Text
                    fontFamily={"serif"}
                    fontWeight={"extrabold"}
                    fontSize={SIZES.large - 5}
                    lineHeight={SIZES.large - 3}
                    color={COLORS.white}
                  >
                    ₦ {item.price}
                  </Text>
                </View>
              </Box>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <View px={SIZES.small} py={2}>
      {data.map((item) => {
        return (
          <TouchableOpacity
            activeOpacity={0.5}
            key={item.id}
            onPress={() => navigation.navigate("Details", item)}
          >
            <Box
              w={"full"}
              h={200}
              rounded={SIZES.small}
              mb={2}
              bg={COLORS.mediumDeep}
              position={"relative"}
            >
              <Image
                source={{ uri: item.imageUrl }}
                w={"full"}
                h={"full"}
                rounded={SIZES.small}
                opacity={0.5}
                alt=""
                resizeMode="cover"
                position={"relative"}
              />
              <View position={"absolute"} bottom={3} px={SIZES.small}>
                <Text
                  numberOfLines={1}
                  fontWeight={"bold"}
                  fontSize={SIZES.medium}
                  color={COLORS.white}
                  mr={"auto"}
                >
                  {item.name}
                </Text>
                <Text
                  fontFamily={"serif"}
                  fontWeight={"extrabold"}
                  fontSize={SIZES.large - 5}
                  lineHeight={SIZES.large - 3}
                  color={COLORS.lightGrey}
                >
                  ₦ {item.price}
                </Text>
              </View>
            </Box>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ListView;
