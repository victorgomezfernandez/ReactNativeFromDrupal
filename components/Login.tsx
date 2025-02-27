import { handleLogin } from "@/services/HandleLogin";
import { handleLogout } from "@/services/HandleLogout";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="User name"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={userPass}
        onChangeText={setUserPass}
      />
      <Button
        title="Submit"
        onPress={() => handleLogin(userName, userPass, navigation)}
      />
      <Button
        title="Log out"
        onPress={() => handleLogout(navigation)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: { padding: 20, justifyContent: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 },
});

