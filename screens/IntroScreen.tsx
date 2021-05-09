import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import WelcomScreenCard from "../components/WelcomScreenCard";

const IntroScreen = () => {
  return (
    <ScrollView>
      <View style={styles.screen}>
      <WelcomScreenCard
        imgPath={require("../assets/stepOne.png")}
        heading={`Learn anytime \n and anywhere`}
        subheading={`Quarantine is the perfect time to spend your '\n'  day learning something new, from anywhere!`}
      />

      <WelcomScreenCard
        imgPath={require("../assets/stepTwo.png")}
        heading={`Find a course \n for you`}
        subheading={`Quarantine is the perfect time to spend your \n day learning something new, from anywhere!`}
      />

      <WelcomScreenCard
        imgPath={require("../assets/stepThree.png")}
        heading={`Improve your skills`}
        subheading={`Quarantine is the perfect time to spend your '\n'  day learning something new, from anywhere!`}
      />
    </View>
    </ScrollView>
    
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
