import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ListView from "../Components/SearchScreen/ListView";
import { ScrollView } from "native-base";

const SearchScreen = () => {
  return (
    <View>
      {/* search bar */}
      <Text>Search Bar</Text>
      {/* products */}
      <View>
        <ScrollView>
          <ListView />
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
