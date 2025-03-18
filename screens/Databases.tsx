import Database from "@/components/Database";
import Header from "@/components/Header";
import { getAllDatabases } from "@/services/DatabasesService";
import { useEffect, useState } from "react";
import {  ScrollView, StyleSheet, Text, View } from "react-native";

interface DatabaseType {
  name: string;
  img: string;
  description: string;
}

export default function Databases() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [databases, setDatabases] = useState<DatabaseType[]>([]);

  useEffect(() => {

    const fetchDatabases = async () => {
      const data: DatabaseType[] | undefined = await getAllDatabases();
      if (data) {
        setDatabases(data);
      };
    };

    fetchDatabases();
  }, []);


  const handleScroll = (event: any) => {
    setIsScrolled(event.nativeEvent.contentOffset.y > 50);
  };

  return (
    <>
      <Header section="DATABASES" />
      <ScrollView style={styles.container} >
        <Text style={styles.title}>Database managers that I use</Text>
        {databases.length > 0 ? (
          databases.map((d) => (
            <Database key={d.name} name={d.name} description={d.description} />
          ))
        ) : (
          <Text style={styles.loadingText}>Loading databases</Text>
        )}
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
