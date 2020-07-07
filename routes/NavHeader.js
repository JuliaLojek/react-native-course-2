import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const NavHeader = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e368d",
  },
  headerText: {
    fontSize: 20,
    color: "#fff",
    letterSpacing: 1,
  },
  icon: {
    color: "#fff",
    position: "absolute",
    paddingTop: 20,
    left: 20,
  },
});

export default NavHeader;
