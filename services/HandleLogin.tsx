import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export async function handleLogin(userName: string, userPass: string, navigation: any) {
  if (!userName || !userPass) {
    Alert.alert("Error", "Please enter both username and password.");
    return;
  }

  try {
    const response = await axios.post(
      "http://192.168.2.167/prueba/user/login?_format=json",
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
      Alert.alert("Login Successful", `Welcome, ${user}!`);

      await AsyncStorage.multiSet([
        ["logout_token", data.logout_token],
        ["user_name", user],
        ["csrf_token", data.csrf_token],
      ]);
      navigation.replace(navigation.getState().routes[navigation.getState().index].name);
    } else {
      Alert.alert("Login Failed", data.message || "Invalid credentials");
    }
  } catch (error: any) {
    console.error(error);
    Alert.alert("Error", error.response?.data?.message || "Network request failed.");
  }
}
