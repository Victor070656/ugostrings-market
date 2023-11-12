import { View, Text, Input } from "native-base";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { Keyboard, TextInput, TouchableOpacity } from "react-native";

const SearchBar = ({ func }) => {
  const [input, setInput] = useState("");
  //   func(input);
  return (
    <View px={SIZES.small}>
      <View
        flexDirection={"row"}
        alignItems={"center"}
        mt={3}
        mb={2}
        p={1}
        borderWidth={"1"}
        borderColor={COLORS.grey}
        borderRadius={"md"}
      >
        <TextInput
          placeholder="Search....."
          style={{ fontSize: SIZES.small, flex: 1 }}
          value={input}
          onSubmitEditing={() => {
            Keyboard.dismiss();
            func(input);
          }}
          onChangeText={(e) => {
            setInput(e);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            func(input);
          }}
        >
          <Ionicons
            name="search"
            size={SIZES.small + 2}
            color={COLORS.mediumDeep}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
