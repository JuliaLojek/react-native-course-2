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

  const itemPressHandler = (review) => {
    // after the screen name we can pass an object which will be available in the navigation object in the props by using special methods
    navigation.navigate("ReviewDetails", review);
  };

  return (
    <View style={globalStyles.container}>
      

      <MaterialIcons
        name="add"
        size={30}
        onPress={() => setModalOpen(true)}
        style={styles.addButton}
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

const styles = StyleSheet.create({
  addButton: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 6,
    alignSelf: "center",
    elevation: 3,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#333",
    shadowOpacity: 0.5,
  },
  closeButton: {
    alignSelf: "flex-end",
  },
});

export default Home;
