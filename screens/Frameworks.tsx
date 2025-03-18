import {  ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Framework from "@/components/Framework";
import { getAllFrameworks } from "@/services/FrameworksService";

interface FrameworkType {
  name: string;
  description: string;
}

export default function Frameworks() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [frameworks, setFrameworks] = useState<FrameworkType[]>([]);

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
      <Header section="FRAMEWORKS" />
      <ScrollView style={styles.container}>
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
