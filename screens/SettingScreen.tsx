import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SettingOption from "../components/SettingOption";
import CommonHeader from "../components/UI/CommonHeader";
import Container from "../components/UI/Container";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import Typography from "../components/UI/Typography";
import { ScrollView } from "react-native-gesture-handler";

const SettingScreen = () => {
  // this is for notification switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // this is for renderning data
  const settingOptions = [
    {
      title: "Name",
      subTitle: "Mohammad Shahzaib",
      icon: <Octicons name="person" size={14} color="#fff" />,
    },

    {
      title: "Email",
      subTitle: "mohdshahzaib22@gmail.com",
      icon: <MaterialIcons name="email" size={14} color="#fff" />,
    },
    {
      title: "Password",
      subTitle: "changed 2 weeks ago",
      icon: <MaterialIcons name="lock" size={14} color="#fff" />,
    },
  ];

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Container>
          <CommonHeader title="Settings" />

          {/* content container */}
          <View style={{ width: "100%", marginTop: 24 }}>
            {/* image container */}
            <View style={styles.imgContainer}>
              <Image
                resizeMode="contain"
                source={require("../assets/settings.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </View>

            {/* options */}
            <View style={{ width: "100%", marginTop: 16 }}>
              <SettingOption
                icon={
                  <MaterialCommunityIcons name="bell" size={14} color="#fff" />
                }
                optionTitle="Notifications"
                toggleOption={true}
                toggleSwitch={toggleSwitch}
                isEnabled={isEnabled}
              />

              <Typography variant="heading2" style={{ marginVertical: 16 }}>
                Account information
              </Typography>

              {settingOptions.map((item, i) => (
                <View key={i} style={{ marginBottom: 16 }}>
                  <SettingOption
                    icon={item.icon}
                    optionTitle={item.title}
                    optionSubTitle={item.subTitle}
                  />
                </View>
              ))}
            </View>
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 25,
  },

  imgContainer: {
    height: 190,
    width: "100%",
  },
});
