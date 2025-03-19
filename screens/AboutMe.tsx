import Header from "@/components/Header";
import { useState } from "react";
import { ScrollView, StatusBar, TouchableWithoutFeedback, View } from "react-native";
import { Linking, StyleSheet, Text } from "react-native";

export default function AboutMe() {
  const [menuOpened, setMenuOpened] = useState(false);

  const closeMenu = () => {
    setMenuOpened(false);
  };

  return (
    <>
      <StatusBar backgroundColor="#1e1e1e" barStyle={"light-content"}/>
      <Header section="ABOUT ME" menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <TouchableWithoutFeedback onPress={closeMenu}>
          <View>
            <View>
              <View style={styles.aboutContainer}>
                <Text style={styles.aboutTitle}>Thanks for visiting my portfolio! I am looking forward to work with you</Text>
              </View>
              <View style={styles.aboutContainer}>
                <Text style={styles.sectionTitle}>Formation</Text>
                <Text style={styles.aboutTitle}>🔹 SMRT (finished in 2023)</Text>
                <Text style={styles.aboutTitle}>🔹 DAM (ongoing) </Text>
              </View>
              <View style={styles.aboutContainer}>
                <Text style={styles.sectionTitle}>Contact me</Text>
                <Text style={styles.aboutTitle}>🔹 E-Mail: <Text style={styles.aboutLink} onPress={() => Linking.openURL("mailto:victorgoferjim@gmail.com")}>victorgoferjim@gmail.com</Text></Text>
                <Text style={styles.aboutTitle}>🔹 GitHub: <Text style={styles.aboutLink} onPress={() => Linking.openURL("https://www.github.com/victorgomezfernandez")}>victorgomezfernandez</Text></Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  closeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  aboutContainer: {
    gap: 8,
    marginBottom: 8,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  aboutContent: {
    fontSize: 18,
    fontWeight: "400",
  },
  aboutLink: {
    fontSize: 18,
    fontWeight: "500",
    color: "#0000EE",
    textDecorationLine: "underline",
  },
});
