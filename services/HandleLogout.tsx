import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import CookieManager from '@react-native-cookies/cookies';

export async function handleLogout(navigation: any) {

    const token = await AsyncStorage.getItem("logout_token");

    if (!token) {
        Alert.alert("Error", "Invalid token");
        return;
    }

    try {
        console.log(token);
        const response = await fetch(`http://192.168.2.167/prueba/user/logout?_format=json&token=${token}`, {
            method: "POST",
            credentials: "include"
        });

        if (response.ok) {
            Alert.alert("Logout Successful");
            await AsyncStorage.clear();
            navigation.replace(navigation.getState().routes[navigation.getState().index].name);
        } else {
            Alert.alert("Logout Failed");
        }

    } catch (error) {
        console.error(error);
        Alert.alert("Error", "Network request failed.");
    }
}
