import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../components/UI/CustomButton";
import WelcomScreenCard from "../components/WelcomScreenCard";

const IntroScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={{ marginTop: "auto" }}>
        <WelcomScreenCard
          imgPath={require("../assets/stepOne.png")}
          heading={`Learn anytime \n and anywhere`}
          subheading={`Quarantine is the perfect time to spend your '\n'  day learning something new, from anywhere!`}
        />

        {/* <WelcomScreenCard
          imgPath={require("../assets/stepTwo.png")}
          heading={`Find a course \n for you`}
          subheading={`Quarantine is the perfect time to spend your \n day learning something new, from anywhere!`}
        />

        <WelcomScreenCard
          imgPath={require("../assets/stepThree.png")}
          heading={`Improve your skills`}
          subheading={`Quarantine is the perfect time to spend your '\n'  day learning something new, from anywhere!`}
        /> */}
      </View>

      <View style={{ marginTop: "auto", marginBottom: 30 }}>
        <CustomButton variant="buttonMediumText">Next</CustomButton>
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
