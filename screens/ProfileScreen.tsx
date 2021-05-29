import React from "react";
import { StyleSheet, Image, View } from "react-native";
import CommonHeader from "../components/UI/CommonHeader";
import Container from "../components/UI/Container";
import CustomButton from "../components/UI/CustomButton";
import Typography from "../components/UI/Typography";
import colors from "../constants/colors";

const ProfileScreen = () => {
  const settingOptions = ["Your Courses", "Saved", "Payment"];

  return (
    <View style={styles.screen}>
      <Container>
        <CommonHeader title="Profile" />

        <View style={styles.contentContainer}>
          {/* Avatar */}
          <View style={styles.profileImgContainer}>
            <Image
              style={styles.img}
              source={require("../assets/profile.png")}
            />
          </View>

          {/* options */}
          <View style={{ width: "100%" }}>
            {settingOptions.map((item, i) => (
              <CustomButton
                key={i}
                style={styles.btn}
                variant="heading1"
                color="#3C3A36"
              >
                {item}
              </CustomButton>
            ))}

            <Typography
              style={{ textAlign: "center", color: "#78746D" }}
              variant="buttonSmallText"
            >
              Logout
            </Typography>
          </View>
        </View>
      </Container>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 25,
  },

  contentContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 32,
  },

  profileImgContainer: {
    height: 140,
    width: 140,
    borderWidth: 4,
    borderColor: colors.secondary,
    borderRadius: 140,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  img: {
    height: "95%",
    width: "95%",
  },

  btn: {
    height: 80,
    borderWidth: 1,
    borderColor: "#BEBAB3",
    backgroundColor: "transparent",
    marginBottom: 16,
  },
});
