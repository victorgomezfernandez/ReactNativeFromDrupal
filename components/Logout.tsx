import { handleLogout } from "@/services/HandleLogout";
import { Button, StyleSheet, View } from "react-native";

export default function Logout(navigation: any) {
  return (
    <>
      <View style={styles.logoutButton}>
        <Button onPress={handleLogout} title="Log out" />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  logoutButton: {
    width: "100%",
  }
});