import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ navigation }) => {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Details</Text>
      <Button title="back to the home screen" onPress={pressHandler} />
    </View>
  );
};

// const styles = StyleSheet.create({});

export default ReviewDetails;
