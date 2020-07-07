import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../components/Card";

const ReviewDetails = ({ navigation }) => {
  // // pops the current screen off the stack
  // const pressHandler = () => {
  //   navigation.goBack();
  // };
  const rating = navigation.getParam("rating");

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("title")}
        </Text>
        <Text style={globalStyles.text}>{navigation.getParam("body")}</Text>
        <View style={styles.ratingBox}>
          <Text style={globalStyles.text}>Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingBox: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    marginTop: 20,
    paddingTop: 10,
  },
});

export default ReviewDetails;
