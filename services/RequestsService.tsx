import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export async function getAllRequests() {

  try {
    const response = await fetch(`http://192.168.2.167/prueba/api/requests`, {
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

export async function postRequest({ title, body }: { title: string; body: string }) {
  try {
    // Obtener el token de AsyncStorage de forma síncrona
    const userToken = await AsyncStorage.getItem("csrf_token");

    console.log("CSRF Token:", userToken); // Verificar si el token se obtiene correctamente

    if (!userToken) {
      Alert.alert("Error", "Log in again");
      return;
    }

    const response = await fetch(`http://192.168.2.167/prueba/jsonapi/node/requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/vnd.api+json",
        "Accept": "application/vnd.api+json",
        "X-CSRF-Token": userToken, // Ahora el token se usa correctamente
      },
      body: JSON.stringify({
        data: {
          type: "node--requests",
          attributes: {
            title: title,
            field_title: title,
            field_body: body,
          },
        },
      }),
    });

    if (response.ok) {
      Alert.alert("Request sent successfully");
    } else {
      Alert.alert("Failed to send the request", "Try again later");
    }
  } catch (error) {
    console.error("Error:", error);
    Alert.alert("Error", "Instruction failed");
  }
}