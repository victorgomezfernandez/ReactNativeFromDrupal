import { Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { deleteRequest } from "@/services/RequestsService";
import { useNavigation } from "@react-navigation/native";

export default function Request({
  title,
  body,
  requestedBy,
  id,
}: {
  title: string;
  body: string;
  requestedBy: string | null;
  id: string
}) {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigation: any = useNavigation();

  const handleDelete = () => {
    deleteRequest(id, navigation);
    setShowModal(false);
  };

  return (
    <View style={styles.requestCard}>
      <TouchableOpacity style={styles.deleteContainer} onPress={() => setShowModal(true)}>
        <Image style={styles.deleteImg} source={require("../assets/images/icons/delete.png")} />
      </TouchableOpacity>
      <Text style={styles.requestTitle}>{title}</Text>
      <Text style={styles.requestBody}>{body}</Text>
      <Text style={styles.requestedBy}>Requested by: {requestedBy}</Text>
      <Modal
        visible={showModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Do you want to delete this request?</Text>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleDelete}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  requestCard: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  deleteContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1
  },
  deleteImg: {
    width: 40,
    height: 40, 
  },
  requestTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  requestBody: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  requestedBy: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },

  // Estilos para el modal
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: "80%",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: "#333",
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#fcba03",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
