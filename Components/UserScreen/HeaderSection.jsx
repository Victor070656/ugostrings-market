import React from "react";
import { useUser, useAuth } from "@clerk/clerk-expo";
import { Box, Button, Image, Text, View } from "native-base";
import { COLORS, SIZES } from "../../constants";
import { MaterialIcons } from "@expo/vector-icons";

const HeaderSection = () => {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <View p={SIZES.small}>
      <View
        alignItems={"center"}
        py={6}
        bg={COLORS.mediumDeep}
        rounded={"xl"}
        shadow={"6"}
      >
        {user.imageUrl ? (
          <Image
            alt=""
            source={{ uri: user.imageUrl }}
            w={130}
            h={130}
            rounded={"full"}
            borderColor={COLORS.white}
            borderWidth={2}
            bg={COLORS.lightGrey}
          />
        ) : (
          <Image
            alt=""
            source={require("../../assets/icon.png")}
            w={130}
            h={130}
            rounded={"full"}
            borderColor={COLORS.white}
            borderWidth={2}
          />
        )}

        <Text
          fontSize={SIZES.medium}
          fontFamily={"fugaz"}
          color={COLORS.white}
          mt={3}
          lineHeight={SIZES.medium + 2}
        >
          {user.fullName}
        </Text>
        <Text
          fontSize={SIZES.small - 2}
          fontWeight={"bold"}
          color={COLORS.white}
          lineHeight={SIZES.small + 2}
          mb={2}
        >
          {user.primaryEmailAddress.toString()}
        </Text>

        <Button
          onPress={() => signOut()}
          bg={COLORS.lightGrey}
          _pressed={{ backgroundColor: COLORS.white }}
          rounded={"3xl"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDir={"row"}
            alignItems={"center"}
            px={"1.5"}
          >
            <Text fontWeight={"bold"}>Logout</Text>{" "}
            <MaterialIcons name="logout" size={18} color={COLORS.mediumDeep} />
          </Box>
        </Button>
      </View>
    </View>
  );
};

export default HeaderSection;
