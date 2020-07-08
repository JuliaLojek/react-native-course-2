import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const NavHeader = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.titleBox}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.logo}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    // width: "100%",
    height: 70,
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e368d",
    // resizeMode: "cover",
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#333",
    shadowOpacity: 0.5,
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    paddingTop: 20,
    left: 20,
  },
  titleBox: {
    flexDirection: "row",
  },
  logo: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});

export default NavHeader;
