import Database from "@/components/Database";
import Header from "@/components/Header";
import { getAllDatabases } from "@/services/DatabasesService";
import { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

interface DatabaseType {
  name: string;
  description: string;
}

export default function Databases() {
  const [databases, setDatabases] = useState<DatabaseType[]>([]); 
  const [menuOpened, setMenuOpened] = useState(false);

  const closeMenu = () => {
    setMenuOpened(false);
  }

  useEffect(() => {

    const fetchDatabases = async () => {
      const data: DatabaseType[] | undefined = await getAllDatabases();
      if (data) {
        setDatabases(data);
      };
    };

    fetchDatabases();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#1e1e1e" barStyle={"light-content"}/>
      <Header section="DATABASES" menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
      <ScrollView style={styles.container} >
        <TouchableWithoutFeedback onPress={() => closeMenu()}>
          <View>
            <Text style={styles.title}>Database managers that I use</Text>
            {databases.length > 0 ? (
              databases.map((d) => (
                <Database key={d.name} name={d.name} description={d.description} />
              ))
            ) : (
              <Text style={styles.loadingText}>Loading databases</Text>
            )}
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
  databasesSubtitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});
