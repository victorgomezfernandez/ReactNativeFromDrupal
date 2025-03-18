import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Animated } from 'react-native';
import { handleLogout } from '@/services/HandleLogout';
import { handleLogin } from '@/services/HandleLogin';
import { useUser } from '@/hooks/useUser';

export default function Menu() {
  const navigation: any = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const { userName } = useUser();
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");
  const menuAnim = useState(new Animated.Value(-300))[0];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);

    Animated.timing(menuAnim, {
      toValue: menuVisible ? -300 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    setMenuVisible(false);
    Animated.timing(menuAnim, {
      toValue: -300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
    closeMenu();
  };

  return (
    <>
      <TouchableOpacity onPress={toggleMenu}>
        <Image
          source={require("../assets/images/icons/menuwhite.png")}
          style={styles.burgerIcon}
        />
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.burgerMenu,
          { transform: [{ translateX: menuAnim }] },
        ]}
      >
        <TouchableOpacity onPress={closeMenu}>
          <Image
            source={require("../assets/images/icons/xwhite.png")}
            style={styles.xIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("Home")}>
          <Text style={styles.menuText}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("Frameworks")}>
          <Text style={styles.menuText}>FRAMEWORKS</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigateTo("Languages")}>
          <Text style={styles.menuText}>LANGUAGES</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigateTo("Databases")}>
          <Text style={styles.menuText}>DATABASES</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("Requests")}>
          <Text style={styles.menuText}>REQUESTS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("AboutMe")}>
          <Text style={styles.menuText}>ABOUT ME</Text>
        </TouchableOpacity>
        {userName ? (
          <>
            <Text style={styles.menuText}>LOGGED AS {userName}</Text>
            <TouchableOpacity onPress={() => handleLogout(navigation)}>
              <Text style={styles.button}>LOG OUT</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="gray"
              value={inputUser}
              onChangeText={setInputUser}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
              value={inputPass}
              onChangeText={setInputPass}
            />
            <TouchableOpacity onPress={() => handleLogin(inputUser, inputPass, navigation)}>
              <Text style={styles.button}>LOG IN</Text>
            </TouchableOpacity>
          </>
        )}
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  burgerMenu: {
    backgroundColor: "#1e1e1e",
    width: '80%',
    padding: 10,
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 15,
    borderBottomRightRadius: 12,
    borderBottomColor: "#fcba03",
    borderRightColor: "#fcba03",
    borderWidth: 1
  },
  burgerIcon: {
    width: 40,
    height: 40,
    marginLeft: 5,
    marginTop: 5,
    cursor: 'pointer',
  },
  xIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginLeft: 10,
    marginTop: 10,
  },
  menuText: {
    fontSize: 30,
    color: "#fcba03",
  },
  input: {
    backgroundColor: "white",
    color: "black",
    width: "90%",
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#fcba03",
    textAlign: "center",
    fontSize: 20,
    padding: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "black",
    alignSelf: 'flex-start',
    width: "90%",
  },
});
