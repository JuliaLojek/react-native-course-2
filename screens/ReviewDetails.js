import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ navigation }) => {
  // // pops the current screen off the stack
  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{ navigation.getParam("title") }</Text>
      <Text style={globalStyles.text}>{ navigation.getParam("body") }</Text>
      <Text style={globalStyles.text}>Rating: { navigation.getParam("rating") }</Text>
    </View>
  );
};

// const styles = StyleSheet.create({});

export default ReviewDetails;
