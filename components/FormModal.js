import React from "react";
import { Modal, View, StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import AddReviewForm from "./AddReviewForm";

const FormModal = ({ isModalOpen, onModalClose, addReview }) => {
  return (
    <Modal visible={isModalOpen} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
        <MaterialIcons
          name="close"
          size={24}
          onPress={onModalClose}
          style={{ ...globalStyles.button, ...styles.closeButton }}
        />

        <AddReviewForm addReview={addReview} />
      </View>
      </TouchableWithoutFeedback>
      
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
