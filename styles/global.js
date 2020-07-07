import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontFamily: "playfair-bold",
    fontSize: 24,
    textAlign: "center",
    color: "#1e368d",
    marginBottom: 20,
  },
  cardTitle: {
    fontFamily: "playfair-bold",
    fontSize: 20,
    color: "#666",
  },
  text: {
    fontFamily: "playfair-regular",
    fontSize: 18,
    marginVertical: 8,
    lineHeight: 20,
  },
});

export const images = {
  ratings: {
    "1": require("../assets/rating-1.png"),
    "2": require("../assets/rating-2.png"),
    "3": require("../assets/rating-3.png"),
    "4": require("../assets/rating-4.png"),
    "5": require("../assets/rating-5.png"),
  },
};
