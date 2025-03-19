import { Alert, ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "@/config";

export async function handleLogin(userName: string, userPass: string, navigation: any) {
  if (!userName || !userPass) {
    Alert.alert("Error", "Please enter both username and password.");
    return;
  }

  try {
    const response = await axios.post(
      `${API_URL}/prueba/user/login?_format=json`,
      { name: userName, pass: userPass },
      {
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": "SameSite=None",
        },
        withCredentials: true,
      }
    );

    const data = response.data;

    if (response.status === 200) {
      const user = data.current_user?.name || "Unknown User";
      const roles = data.current_user?.roles || [];

      await AsyncStorage.multiSet([
        ["logout_token", data.logout_token],
        ["user_name", user],
        ["csrf_token", data.csrf_token],
        ["user_roles", JSON.stringify(roles)],
      ]);

      navigation.navigate("Home");

      ToastAndroid.show(
        `Login Successful, Welcome ${user}`,
        ToastAndroid.TOP,
      );
    } else {
      Alert.alert("Login Failed", data.message || "Invalid credentials");
    }
  } catch (error: any) {
    console.error(error);
    ToastAndroid.show(
      error.response?.data?.message,
      ToastAndroid.TOP,
    );
  }
}
