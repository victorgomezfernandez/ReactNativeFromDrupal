import { Alert } from "react-native";
import axios from "axios";

export async function getAllFrameworks() {
  try {
    const response = await axios.get("http://192.168.2.167/prueba/api/frameworks");
    return response.data;
  } catch (error: any) {
    console.error("Error fetching frameworks:", error);
    Alert.alert("Error", error.response?.data?.message || "Failed to fetch frameworks.");
  }
}
