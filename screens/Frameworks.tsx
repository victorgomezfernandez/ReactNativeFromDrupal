import { ScrollView, StyleSheet, Text, View, StatusBar, TouchableWithoutFeedback } from "react-native";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Framework from "@/components/Framework";
import { getAllFrameworks } from "@/services/FrameworksService";

interface FrameworkType {
  name: string;
  description: string;
}

export default function Frameworks() {
  const [frameworks, setFrameworks] = useState<FrameworkType[]>([]);
  const [menuOpened, setMenuOpened] = useState(false);

  const closeMenu = () => {
    setMenuOpened(false);
  }

  useEffect(() => {
    const fetchFrameworks = async () => {
      const data: FrameworkType[] | undefined = await getAllFrameworks();
      if (data) {
        setFrameworks(data);
      }
    };

    fetchFrameworks();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#1e1e1e" barStyle={"light-content"}/>
      <Header section="FRAMEWORKS" menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <ScrollView style={styles.container}><TouchableWithoutFeedback onPress={() => closeMenu()}>
        <View>
          <Text style={styles.title}>Frameworks that I use</Text>
          <View style={styles.frameworksList}>
            {frameworks.length > 0 ? (
              frameworks.map((f) => (
                <Framework key={f.name} name={f.name} description={f.description} />
              ))
            ) : (
              <Text style={styles.loadingText}>Loading frameworks...</Text>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fcba03",
  },
  frameworksList: {
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
    color: "#aaa",
    marginTop: 20,
  },
});
