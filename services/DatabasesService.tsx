import { Alert } from "react-native";
import axios from "axios";

export async function getAllDatabases() {
  try {
    const response = await axios.get("http://192.168.2.167/prueba/api/databases");
    return response.data;
  } catch (error: any) {
    console.error("Error fetching databases: ", error);
    Alert.alert("Error", error.response?.data?.message || "Failed to fetch databases.");
  }
}