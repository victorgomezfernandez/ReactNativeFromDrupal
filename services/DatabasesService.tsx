import { Alert } from "react-native";

export async function getAllDatabases() {

  try {
    const response = await fetch(`http://192.168.2.167/prueba/api/databases`, {
      method: "GET"
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      Alert.alert("Failed to get the data");
    }
    
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "Instruction failed");
  }

}