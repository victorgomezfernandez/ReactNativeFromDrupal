import { StyleSheet, Text, View } from "react-native";
import Menu from "./Menu";

export default function Header({ section, isScrolled }: { section: string; isScrolled: boolean }) {
  return (
    <View style={[styles.headerContent, isScrolled && styles.scrolledHeader]}>
      <Menu isScrolled={isScrolled}/>
      <Text style={[styles.headerText, isScrolled && styles.scrolledText]}>{section}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  scrolledHeader: {
    backgroundColor: "#000",
  },
  headerText: {
    fontSize: 25,
    marginLeft: 20,
    fontWeight: "bold",
    color: "#000",
  },
  scrolledText: {
    color: "#fff",
  },
});
