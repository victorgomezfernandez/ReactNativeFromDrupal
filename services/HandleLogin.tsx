import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export async function handleLogin(userName: string, userPass: string, navigation: any) {

    if (!userName || !userPass) {
        Alert.alert("Error", "Please enter both username and password.");
        return;
    }

    try {
        const response = await fetch("http://192.168.2.167/prueba/user/login?_format=json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Set-Cookie": "SameSite=None"
            },
            body: JSON.stringify({ name: userName, pass: userPass }),
            credentials: "include"
        });

        const data = await response.json();

        if (response.ok) {
            const userName = data.current_user?.name || "Unknown User";
            Alert.alert("Login Successful", `Welcome, ${userName}!`);
            await AsyncStorage.setItem("logout_token", data.logout_token);
            await AsyncStorage.setItem("user_name", userName);
            await AsyncStorage.setItem("csrf_token", data.csrf_token);
            navigation.replace(navigation.getState().routes[navigation.getState().index].name);
        } else {
            Alert.alert("Login Failed", data.message || "Invalid credentials");
        }
    } catch (error) {
        console.error(error);
        Alert.alert("Error", "Network request failed.");
    }
}
