import { handleLogin } from "@/services/HandleLogin";
import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export function Index() {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");

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
      <Button title="Submit" onPress={() => handleLogin(userName, userPass)} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: { padding: 20, justifyContent: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 },
});
