import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import colors from "../../constants/colors";
import Typography from "./Typography";

type PropsType = {
  price: string | number;
  style?: StyleProp<ViewStyle>;
};

const PriceCard = ({ price, style }: PropsType) => {
  return (
    <View style={[styles.priceCardContainer, style]}>
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
    margin: 8,
  },
});
