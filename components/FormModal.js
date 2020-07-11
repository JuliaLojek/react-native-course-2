import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import AddReviewForm from "./AddReviewForm";
import { add } from "react-native-reanimated";

const FormModal = ({ isModalOpen, onModalClose, addReview }) => {
  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.modalContent}>
        <MaterialIcons
          name="close"
          size={24}
          onPress={onModalClose}
          style={{ ...globalStyles.button, ...styles.closeButton }}
        />

        <AddReviewForm addReview={addReview} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    alignSelf: "flex-end",
  },
  modalContent: {
    flex: 1,
    padding: 16,
  },
});

export default FormModal;
