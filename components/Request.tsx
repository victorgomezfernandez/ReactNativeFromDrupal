import { StyleSheet, Text, View } from "react-native";

export default function Request({ title, body }: { title: string, body: string }) {
  return (
    <View style={styles.requestCard}>
      <Text style={styles.requestTitle}>{title}</Text>
      <Text style={styles.requestBody}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  requestCard: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  requestTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  requestBody: {
    fontSize: 16,
    color: "#555",
  },
});
