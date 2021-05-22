import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";
import Typography from "./Typography";

type PropsType = {
  price: string | number;
};

const PriceCard = ({ price }: PropsType) => {
  return (
    <View style={styles.priceCardContainer}>
      <Typography variant="buttonSmallText" style={{ color: "#fff" }}>
        {price}
      </Typography>
    </View>
  );
};

export default PriceCard;

const styles = StyleSheet.create({
  priceCardContainer: {
    width: 63,
    height: 24,
    backgroundColor: colors.secondary,
    borderRadius: 12,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 8
  },
});
