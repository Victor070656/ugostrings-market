import {
  View,
  Text,
  Image,
  VStack,
  ScrollView,
  Button,
  HStack,
} from "native-base";
import React from "react";
import { COLORS, SIZES } from "../constants";
import { useUser } from "@clerk/clerk-expo";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
  const { user } = useUser();
  const items = route.params;

  //   const newOrder = {
  //     ...items,
  //     quantity: 2,
  //     total: items.price * 2,
  //     email: user.primaryEmailAddress.toString(),
  //     destination: "Abuja",
  //   };
  console.log(items);
  //   console.log(newOrder);
  return (
    <View flex={1}>
      <View style={{ width: "100%", height: 350 }} bg={COLORS.mediumDeep}>
        <Image
          alt=""
          source={{ uri: items.imageUrl }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          opacity={0.6}
        />
        {/* top */}
        <View position={"absolute"}>
          <View
            flexDir={"row"}
            alignItems={"center"}
            w={"full"}
            flex={1}
            pl={5}
            pt={5}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                name="leftcircleo"
                size={SIZES.large}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* end top */}
      </View>
      <View
        flex={1}
        px={3}
        py={5}
        mt={-8}
        bg={COLORS.white}
        roundedTop={"3xl"}
        shadow={"7"}
      >
        <VStack flex={1} space={2}>
          <Text fontFamily={"fugaz"} fontSize={SIZES.large}>
            {items.name}
          </Text>
          <Text fontSize={SIZES.medium} fontWeight={"bold"}>
            ₦ {items.price}
          </Text>
          <ScrollView flex={1} p={2} rounded={"lg"} bg={COLORS.lightGrey}>
            <Text fontSize={SIZES.small + 2} fontWeight={"bold"}>
              Description
            </Text>
            <Text>{items.description}</Text>
          </ScrollView>
          <Button
            rounded={"lg"}
            bg={COLORS.mediumDeep}
            _text={{
              fontSize: SIZES.medium - 2,
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate("Payment", { items })}
            _pressed={{
              bg: COLORS.deep,
            }}
          >
            BUY NOW
          </Button>
        </VStack>
      </View>
    </View>
  );
};

export default DetailsScreen;
