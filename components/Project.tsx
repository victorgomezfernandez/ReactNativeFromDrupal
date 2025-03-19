import { Linking, StyleSheet, Text, View } from "react-native"

export default function Project({title, description, link}: {title: string, description: string, link: string}) {
  return (
    <>
      <View style={styles.projectContainer}>
        <Text style={styles.projectTitle}>{title}</Text>
        <Text style={styles.projectDescription}>{description}</Text>
        <Text style={styles.projectLink} onPress={() => Linking.openURL(`${link}`)}>Visit the project</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  projectContainer: {
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
  projectTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fcba03",
    marginBottom: 8
  },
  projectDescription: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8
  },
  projectLink: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0000EE",
    textDecorationLine: "underline",
  }
})