import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";

export async function getAllRequests() {
  try {
    const response = await axios.get("http://192.168.2.167/prueba/api/requests");

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

export async function postRequest({ title, body, requestedBy }: { title: string; body: string; requestedBy: string | null }) {
  try {
    const userToken = await AsyncStorage.getItem("csrf_token");

    console.log("CSRF Token:", userToken);

    if (!userToken) {
      Alert.alert("Error", "Log in again");
      return;
    }

    const response = await axios.post(
      "http://192.168.2.167/prueba/jsonapi/node/requests",
      {
        data: {
          type: "node--requests",
          attributes: {
            title: title,
            field_title: title,
            field_body: body,
            field_requested_by: requestedBy,
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/vnd.api+json",
          Accept: "application/vnd.api+json",
          "X-CSRF-Token": userToken,
        },
      }
    );

    if (response.status === 200 || response.status === 201) {
      Alert.alert("Request sent successfully");
    } else {
      Alert.alert("Failed to send the request", "Try again later");
    }
  } catch (error: any) {
    console.error("Error:", error);
    Alert.alert("Error", error.response?.data?.message || "Instruction failed");
  }
}
