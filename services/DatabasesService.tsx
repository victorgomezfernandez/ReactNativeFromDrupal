import { Alert } from "react-native";
import axios from "axios";
import { API_URL } from "@/config";

export async function getAllDatabases() {
  try {
    const response = await axios.get(`${API_URL}/prueba/api/databases`);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching databases: ", error);
    Alert.alert("Error", error.response?.data?.message || "Failed to fetch databases.");
  }
}