import { API_URL } from "@/config";
import axios from "axios";
import { Alert } from "react-native";

export async function getAllProjects() {
  try {
    const response = await axios.get(`${API_URL}/prueba/api/projects`);

    if (response.status === 200) {
      return response.data;
    } else {
      Alert.alert("Failed to get the data");
    }
  } catch (error: any) {
    console.error("Error:", error);
    Alert.alert("Error", error.response?.data?.message || "Instruction failed");
  }
}
