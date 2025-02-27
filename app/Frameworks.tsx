import Menu from "@/components/Menu";
import { StyleSheet, Text } from "react-native";

export default function Frameworks() {
  return (
    <>
      <Menu />
      <Text style={styles.frameworksTitle}>FRAMEWORKS</Text>
      <Text style={styles.frameworksSubtitle}>List of the frameworks I am fluent with</Text>
    </>
  )
}

const styles = StyleSheet.create({
  frameworksTitle: {
    fontSize: 35,
    position: "absolute",
    alignSelf: "center",
    top: 3,
  },
  frameworksSubtitle: {
    fontSize: 20,
  }
})