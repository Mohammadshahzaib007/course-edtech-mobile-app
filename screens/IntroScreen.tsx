import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "../components/UI/CustomButton";
import Indicator from "../components/UI/Indicator";
import WelcomScreenCard from "../components/WelcomScreenCard";

type propsType = {
  step: number;
  goToNextHandler: () => void;
};

const IntroScreen = (props: propsType) => {
  const { step, goToNextHandler } = props;

  const itemToBeShown = () => {
    switch (step) {
      case 1:
        return (
          <WelcomScreenCard
            imgPath={require("../assets/stepOne.png")}
            heading={`Learn anytime \n and anywhere`}
            subheading={`Quarantine is the perfect time to spend your '\n'  day learning something new, from anywhere!`}
          />
        );

      case 2:
        return (
          <WelcomScreenCard
            imgPath={require("../assets/stepTwo.png")}
            heading={`Find a course \n for you`}
            subheading={`Quarantine is the perfect time to spend your \n day learning something new, from anywhere!`}
          />
        );

      case 3:
        return (
          <WelcomScreenCard
            imgPath={require("../assets/stepThree.png")}
            heading={`Improve your skills`}
            subheading={`Quarantine is the perfect time to spend your '\n'  day learning something new, from anywhere!`}
          />
        );
    }
  };

  return (
    <View style={styles.screen}>
      {/* content */}
      <View style={{ marginTop: "auto", height: 446 }}>{itemToBeShown()}</View>

      {/* indicator container */}
      <View style={{ flexDirection: "row", marginTop: 16 }}>
        <Indicator active={step === 1 && true} />
        <Indicator active={step === 2 && true} />
        <Indicator active={step === 3 && true} />
      </View>

      {/* button container */}
      <View style={{ marginTop: "auto", marginBottom: 30 }}>
        <CustomButton
          variant="buttonMediumText"
          onPress={step !== 3 ? goToNextHandler : () => {}}
        >
          {step !== 3 ? "Next" : "Let’s Start"}
        </CustomButton>
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
