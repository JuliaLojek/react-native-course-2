import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../components/Card";
import { MaterialIcons } from "@expo/vector-icons";
import FormModal from "../components/FormModal";

// components specified in the creation of navigation automatically get navigation object in props
// with its built-in methods as e.g. navigate (push passed navigation component to the stack)
const Home = ({ navigation }) => {
  // const pressHandler = () => {
  //   navigation.navigate("ReviewDetails");
  //   // basically does the same:
  //   // navigation.push("ReviewDetails");
  // };

  const [isModalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Cactus Fight",
      rating: 4,
      body: "awesome cactus fights",
      key: "1",
    },
    {
      title: "Random Game",
      rating: 2,
      body: "very random, I don't understand",
      key: "2",
    },
    {
      title: "Yellow Field",
      rating: 5,
      body: "best agriculture game ever",
      key: "3",
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((prevReviews) => {
      return [review, ...prevReviews];
    });
    // setModalOpen(false);
  };

  const itemPressHandler = (review) => {
    // after the screen name we can pass an object which will be available in the navigation object in the props by using special methods
    navigation.navigate("ReviewDetails", review);
  };

  const onModalClose = () => {
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <FormModal isModalOpen={isModalOpen} onModalClose={onModalClose} addReview={addReview} />

      <MaterialIcons
        name="add"
        size={30}
        onPress={() => setModalOpen(true)}
        style={globalStyles.button}
      />

      <Text style={globalStyles.titleText}>My Game Reviews:</Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => itemPressHandler(item)}>
            <Card>
              <Text style={globalStyles.cardTitle}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// const styles = StyleSheet.create({});

export default Home;
