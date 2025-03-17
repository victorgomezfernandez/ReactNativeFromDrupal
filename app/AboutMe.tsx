import Header from "@/components/Header";
import { View } from "react-native";
import { Linking, ScrollView, StyleSheet, Text } from "react-native";

export default function AboutMe() {
  return (
    <>
      <Header section="ABOUT ME" isScrolled={false} />
      <ScrollView contentContainerStyle={styles.container} scrollEventThrottle={16}>
        <View style={styles.aboutContainer}>
          <Text style={styles.sectionTitle}>Projects</Text>
          <Text style={styles.aboutTitle}>🔹 Cartones page: <Text style={styles.aboutLink} onPress={() => Linking.openURL("https://cartones-9f0dc.web.app")}>cartones.com</Text></Text>
          <Text style={styles.aboutTitle}>🔹 SellBook: <Text style={styles.aboutLink} onPress={() => Linking.openURL("https://github.com/victorgomezfernandez/SellBook")}>Books marketplace page</Text></Text>
          <Text style={styles.aboutTitle}>🔹 CharCC: <Text style={styles.aboutLink} onPress={() => Linking.openURL("https://github.com/victorgomezfernandez/CharCC")}>Character creation app</Text></Text>
          <Text style={styles.aboutTitle}>🔹 Paint: <Text style={styles.aboutLink} onPress={() => Linking.openURL("https://github.com/victorgomezfernandez/PAINT")}>App made with Java</Text></Text>
          <Text style={styles.aboutTitle}>🔹 Sopa: <Text style={styles.aboutLink} onPress={() => Linking.openURL("https://github.com/victorgomezfernandez/SOPA")}>Letters Soup with Java</Text></Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.aboutTitle}>🔹 E-Mail: <Text style={styles.aboutLink} onPress={() => Linking.openURL("mailto:victorgoferjim@gmail.com")}>victorgoferjim@gmail.com</Text></Text>
          <Text style={styles.aboutTitle}>🔹 GitHub: <Text style={styles.aboutLink} onPress={() => Linking.openURL("https://www.github.com/victorgomezfernandez")}>victorgomezfernandez</Text></Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>Thanks for visiting my portfolio! I am looking forward to work with you!</Text>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  aboutContainer: {
    gap: 8,
    marginBottom: 8
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: "600"
  },
  aboutContent: {
    fontSize: 18,
    fontWeight: "400"
  },
  aboutLink: {
    fontSize: 18,
    fontWeight: "500",
    color: "#0000EE",
    textDecorationLine: "underline"
  }
})