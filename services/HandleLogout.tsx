import { API_URL } from "@/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert, ToastAndroid } from "react-native";

export async function handleLogout(navigation: any) {
  try {
    const token = await AsyncStorage.getItem("logout_token");

    if (!token) {
      Alert.alert("Error", "Invalid token");
      return;
    }

    const response = await axios.post(
      `${API_URL}/prueba/user/logout?_format=json&token=${token}`,
      {},
      { withCredentials: true }
    );

    if (response.status === 204) {
      await AsyncStorage.clear();
      navigation.replace(navigation.getState().routes[navigation.getState().index].name);
      ToastAndroid.showWithGravity(
        `Logout Successful`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
    } else {
      Alert.alert("Logout Failed");
    }
  } catch (error: any) {
    Alert.alert("Error", error.response?.data?.message || "Network request failed.");
  }
}
