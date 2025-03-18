import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";

export async function handleLogout(navigation: any) {
  try {
    const token = await AsyncStorage.getItem("logout_token");

    if (!token) {
      Alert.alert("Error", "Invalid token");
      return;
    }

    const response = await axios.post(
      `http://192.168.2.167/prueba/user/logout?_format=json&token=${token}`,
      {},
      { withCredentials: true }
    );

    if (response.status === 204) {
      Alert.alert("Logout Successful");
      await AsyncStorage.clear();
      navigation.replace(navigation.getState().routes[navigation.getState().index].name);
    } else {
      Alert.alert("Logout Failed");
    }
  } catch (error: any) {
    Alert.alert("Error", error.response?.data?.message || "Network request failed.");
  }
}
