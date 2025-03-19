import { Alert } from "react-native";
import axios from "axios";
import { API_URL } from "@/config";

export async function getAllFrameworks() {
  try {
    const response = await axios.get(`${API_URL}/prueba/api/frameworks`);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching frameworks:", error);
    Alert.alert("Error", error.response?.data?.message || "Failed to fetch frameworks.");
  }
}
