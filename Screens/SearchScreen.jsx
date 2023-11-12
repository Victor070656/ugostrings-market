import { StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import ListView from "../Components/SearchScreen/ListView";
import { ScrollView, View } from "native-base";
import { SIZES } from "../constants";
import SearchBar from "../Components/SearchScreen/SearchBar";

const SearchScreen = () => {
  const [inputData, setInputData] = useState("");

  const getInputData = (e) => {
    setInputData(e);
  };
  return (
    <View>
      {/* search bar */}
      <SearchBar func={getInputData} />
      {/* products */}
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: SIZES.medium }}
        >
          <ListView inputData={inputData} />
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
