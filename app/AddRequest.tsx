import Header from "@/components/Header";
import { postRequest } from "@/services/RequestsService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddRequest() {
  const [requestTitle, setRequestTitle] = useState("");
  const [requestBody, setRequestBody] = useState("");

  const handleSubmit = async () => {
    if (!requestTitle.trim() || !requestBody.trim()) {
      Alert.alert("Error", "Title and body cannot be empty.");
      return;
    }

    await postRequest({ title: requestTitle, body: requestBody });

    setRequestTitle("");
    setRequestBody("");
  };

  return (
    <>
      <Header section="ADD REQUEST" isScrolled={false} />
      <ScrollView contentContainerStyle={styles.container} scrollEventThrottle={16}>
        <Text style={styles.title}>Create a New Request</Text>
        <View style={styles.form}>
          <TextInput
            placeholder="Title"
            placeholderTextColor="gray"
            value={requestTitle}
            onChangeText={setRequestTitle}
            style={styles.input}
          />
          <TextInput
            placeholder="Body"
            placeholderTextColor="gray"
            value={requestBody}
            onChangeText={setRequestBody}
            style={[styles.input, styles.textArea]}
            multiline={true}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
            <Text style={styles.sendButtonText}>SEND REQUEST</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fcba03",
  },
  form: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  sendButton: {
    backgroundColor: "#fcba03",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  sendButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e1e1e",
  },
});
