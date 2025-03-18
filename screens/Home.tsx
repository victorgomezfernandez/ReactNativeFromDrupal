import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableWithoutFeedback } from "react-native";
import Header from "@/components/Header";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";


export default function Home() {
  const navigation = useNavigation();
  const [menuOpened, setMenuOpened] = useState(false);

  const closeMenu = () => {
    setMenuOpened(false);
  }

  const skills = [
    "Cross-Platform Development: React Native",
    "Web Development: React.js, TypeScript",
    "Backend: Node.js, Spring Boot",
    "Databases: MySQL, PostgreSQL, MongoDB, SQL Server",
    "Networking & IT: System administration, cybersecurity, network servers",
  ];

  return (
    <>
      <StatusBar backgroundColor="#1e1e1e" />
      <Header section="HOME" menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
      <ScrollView style={styles.container}>
        <TouchableWithoutFeedback onPress={() => closeMenu()}>
          <View>
            <Text style={styles.title}>Welcome to My Portfolio</Text>
            <Text style={styles.subtitle}>Full-Stack & Cross-Platform Developer, IT Technician</Text>

            <Text style={styles.description}>
              I'm a Full-Stack Developer and IT Technician with little job experience. I specialize in application development, maintenance of computer equipment and network services.
            </Text>

            <Text style={styles.sectionTitle}>Skills & Expertise</Text>
            <View>
              {skills.map((skill, index) => (
                <Text key={index} style={styles.listItem}>🔹 {skill}</Text>
              ))}
            </View>

            <Text style={styles.sectionTitle}>Projects</Text>
            <Text style={styles.description}>
              Send me projects requests in the Requests section!
            </Text>

            <Text style={styles.sectionTitle}>Let's Connect</Text>
            <Text style={styles.description}>
              Feel free to explore my portfolio and reach out if you're interested in working together!
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});
