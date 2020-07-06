import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

// components specified in the creation of navigation automatically get navigation object in props
// with its built-in methods as e.g. navigate (push passed navigation component to the stack)
const Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
    // basically does the same
    // navigation.push("ReviewDetails");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="go to review details" onPress={pressHandler} />
    </View>
  );
};

// const styles = StyleSheet.create({});

export default Home;
