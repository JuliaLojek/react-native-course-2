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
  button: {
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
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
  },
  errorText: {
    color: "maroon",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
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
