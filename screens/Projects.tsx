import Header from "@/components/Header";
import { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

export default function Projects() {
  const [menuOpened, setMenuOpened] = useState(false);

  const closeMenu = () => {
    setMenuOpened(false);
  }

  return (
    <>
      <StatusBar backgroundColor="#1e1e1e" />
      <Header section="PROJECTS" menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <ScrollView style={styles.container}>
        <TouchableWithoutFeedback onPress={() => closeMenu()}>
          <View>
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
})