import React from "react";
import { StyleSheet, View, Switch } from "react-native";
import colors from "../constants/colors";
import IconButton from "./UI/IconButton";
import Typography from "./UI/Typography";
import { Ionicons } from "@expo/vector-icons";

type PropsType = {
  icon: React.ReactNode;
  toggleOption?: boolean;
  optionTitle: string;
  optionSubTitle?: string;
  isEnabled?: boolean;
  toggleSwitch?: (value: boolean) => void;
};

const SettingOption = (props: PropsType) => {
  const {
    icon,
    toggleOption,
    optionTitle,
    optionSubTitle,
    toggleSwitch,
    isEnabled,
  } = props;

  return (
    <View style={styles.optionContainer}>
      {/* left part */}
      <View style={styles.leftContainer}>
        <View style={styles.iconContainer}>{icon}</View>
        <View>
          <Typography variant="heading2">{optionTitle}</Typography>
          {optionSubTitle && (
            <Typography variant="paragraphMedium" style={{ color: "#78746D" }}>
              {optionSubTitle}
            </Typography>
          )}
        </View>
      </View>

      {/* right part */}
      <View style={styles.rightContainer}>
        {toggleOption ? (
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
            trackColor={{ true: "#5BA092", false: "#BEBAB3" }}
            thumbColor={isEnabled ? "#5BA092" : "#BEBAB3"}
          />
        ) : (
          <IconButton style={{ borderWidth: 0, height: 24, width: 24 }}>
            <Ionicons name="chevron-forward" size={24} color="#BEBAB3" />
          </IconButton>
        )}
      </View>
    </View>
  );
};

export default SettingOption;

const styles = StyleSheet.create({
  optionContainer: {
    height: 82,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#BEBAB3",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  rightContainer: {},
});
