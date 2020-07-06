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
  card: {
    paddingVertical: 20,
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
  }
});
