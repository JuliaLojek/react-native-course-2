import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";


const FormModal = ({ isModalOpen, onModalClose }) => {
  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.modalContent}>
        <MaterialIcons
          name="close"
          size={24}
          onPress={onModalClose}
          style={{ ...globalStyles.button, ...styles.closeButton }}
        />

        <Text>Hello from the modal</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    alignSelf: "flex-end",
  },
});

export default FormModal;
