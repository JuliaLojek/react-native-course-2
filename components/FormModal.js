import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";

const FormModal = () => {
  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.modalContent}>
        <MaterialIcons
          name="close"
          size={24}
          onPress={() => setModalOpen(false)}
          style={{ ...styles.addButton, ...styles.closeButton }}
        />

        <Text>Hello from the modal</Text>
      </View>
    </Modal>
  );
};

export default FormModal;
