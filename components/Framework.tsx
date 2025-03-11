import { StyleSheet, Text, View } from "react-native";

export default function Framework({ name, description }: { name: string; description: string }) {
  return (
    <View style={styles.frameworkCard}>
      <Text style={styles.frameworkTitle}>{name}</Text>
      <Text style={styles.frameworkDescription}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  frameworkCard: {
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    width: "90%",
    alignSelf: "center",
  },
  frameworkTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fcba03",
    marginBottom: 5,
    textAlign: "center",
  },
  frameworkDescription: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
  },
});
