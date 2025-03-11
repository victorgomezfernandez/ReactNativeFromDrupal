import { StyleSheet, Text, View } from "react-native";

export default function Database({ name, description }: { name: string, description: string }) {
    return (
        <View style={styles.databaseCard}>
            <Text style={styles.databaseTitle}>{name}</Text>
            <Text style={styles.databaseDescription}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    databaseCard: {
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
    databaseTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fcba03",
        marginBottom: 5,
        textAlign: "center",
    },
    databaseDescription: {
        fontSize: 16,
        color: "#ddd",
        textAlign: "center",
    },
})