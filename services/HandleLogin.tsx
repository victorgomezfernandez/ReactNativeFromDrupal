import { Alert } from "react-native";

export async function handleLogin(userName: string, userPass: string) {
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

        console.log(response);

        const data = await response.json();

        if (response.ok) {
            Alert.alert("Login Successful", `Welcome, ${data.current_user.name}!`);
        } else {
            Alert.alert("Login Failed", data.message || "Invalid credentials");
        }
    } catch (error) {
        console.error(error);
        Alert.alert("Error", "Network request failed.");
    }
}