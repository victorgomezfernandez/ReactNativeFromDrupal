import { Image, StyleSheet, Text, View } from "react-native"

export default function Framework({ img, name, description }: { img: any; name: string; description: string }) {
  return (
    <View style={styles.frameworkContent}>
      <Image style={styles.frameworkImage} source={img} />
      <Text style={styles.frameworkTitle}>{name}</Text>
      <Text style={styles.frameworkDescription}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  frameworkContent: {
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#fcba03",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  frameworkTitle: {
    fontSize: 20
  },
  frameworkDescription: {
    fontSize: 14,
    textAlign: "center"
  },
  frameworkImage: {
    width: 225,
    height: 150,
    resizeMode: "contain",
    borderRadius: 100
  }
})