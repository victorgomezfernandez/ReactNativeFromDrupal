import { ScrollView, StyleSheet, Text } from "react-native";
import Menu from "@/components/Menu";
import frameworks from "../helpers/frameworks";
import Framework from "@/components/Framework";
import Header from "@/components/Header";
import { useState } from "react";

export default function Frameworks() {

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (event: any) => {
    if (event.nativeEvent.contentOffset.y > 50) {
      setIsScrolled(true); 
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <>
    <Header section="FRAMEWORKS" isScrolled={isScrolled}/>
      <ScrollView contentContainerStyle={styles.scrollContainer} onScroll={handleScroll}>
        <Text style={styles.frameworksSubtitle}>List of the frameworks I usually use</Text>
        {frameworks.map((f) => (
          <Framework key={f.name} img={f.img} name={f.name} description={f.description} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20,
  },
  frameworksTitle: {
    fontSize: 35,
    position: "absolute",
    alignSelf: "center",
  },
  frameworksSubtitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
});
