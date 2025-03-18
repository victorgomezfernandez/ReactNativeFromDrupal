import { StyleSheet, Text, View } from "react-native";
import Menu from "./Menu";

export default function Header({ section, menuOpened, setMenuOpened }: { section: string; menuOpened: boolean; setMenuOpened: (value: boolean) => void;}) {
  return (
    <View style={styles.headerContent}>
      <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
      <Text style={styles.headerText}>{section}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#1e1e1e",
    borderBottomWidth: 2,
    borderBottomColor: "#fcba03",
    elevation: 5,
    zIndex: 1
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fcba03",
    marginLeft: 15,
  },
});
