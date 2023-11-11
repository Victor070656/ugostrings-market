import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import { Box, View } from "native-base";

// https://res.cloudinary.com/dygl40fym/image/upload/v1699684179/info_cqlwi7.jpg

const InfoCard = () => {
  return (
    <Box py={2} style={{ borderRadius: SIZES.medium }}>
      <View shadow={"5"} style={styles.infoContainer}>
        <Image
          source={require("../../assets/info.jpg")}
          style={styles.infoImage}
        />
        <Text style={styles.infoText}>Great Deals</Text>
        <Text style={styles.infoSubText}>Best marketplace</Text>
        <Text style={styles.infoSubText}>for your beads</Text>
      </View>
    </Box>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  infoContainer: {
    position: "relative",
    marginHorizontal: SIZES.small,
    height: 200,
    backgroundColor: COLORS.mediumDeep,
    justifyContent: "center",
    borderRadius: SIZES.small,
  },
  infoImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    objectFit: "cover",
    opacity: 0.4,
    borderRadius: SIZES.small,
  },
  infoText: {
    fontFamily: "fugaz",
    fontSize: SIZES.xl,
    color: COLORS.lightGrey,
    alignSelf: "flex-end",
    paddingHorizontal: SIZES.small,
    marginBottom: 0,
    lineHeight: 50,
  },
  infoSubText: {
    fontFamily: "merienda",
    fontSize: SIZES.medium,
    color: COLORS.lightGrey,
    alignSelf: "flex-end",
    paddingHorizontal: SIZES.medium,
    marginTop: 0,
    lineHeight: 25,
  },
});
