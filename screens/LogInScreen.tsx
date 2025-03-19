import Header from "@/components/Header"
import { handleLogin } from "@/services/HandleLogin";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Text } from "react-native";
import { ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"

export default function LogInScreen() {
  const navigation = useNavigation();
  const [menuOpened, setMenuOpened] = useState(false);
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");

  const closeMenu = () => {
    setMenuOpened(false);
  }
  return (
    <>
      <StatusBar backgroundColor="#1e1e1e" barStyle={"light-content"}/>
      <Header section="LOG IN" menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <ScrollView style={styles.container}>
        <TouchableWithoutFeedback onPress={() => closeMenu()}>
          <View style={styles.form}>
            <Text style={styles.title}>Log in to access to more content</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="gray"
              value={inputUser}
              onChangeText={setInputUser}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
              value={inputPass}
              onChangeText={setInputPass}
            />
            <TouchableOpacity onPress={() => handleLogin(inputUser, inputPass, navigation)}>
              <Text style={styles.button}>LOG IN</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  form: {
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fcba03",
  },
  input: {
    backgroundColor: "white",
    color: "black",
    width: "90%",
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#fcba03",
    textAlign: "center",
    fontSize: 20,
    padding: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "black",
    alignSelf: 'flex-start',
    width: 200,
  },
})