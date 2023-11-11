import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.small,
        paddingVertical: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", gap: 7, alignItems: "center" }}>
        <Image
          source={require("../../assets/user.jpg")}
          style={{
            width: SIZES.xl,
            height: SIZES.xl,
            objectFit: "cover",
            borderRadius: SIZES.medium,
          }}
        />
        <View>
          <Text style={{ fontWeight: "700", color: COLORS.mediumDeep }}>
            Hello
          </Text>
          <Text
            style={{
              fontFamily: "fugaz",
              fontSize: SIZES.small,
              color: COLORS.mediumDeep,
            }}
          >
            Victor Ikechukwu
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons name="search" size={SIZES.medium} color={COLORS.mediumDeep} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
