import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Logout from './Logout';

export default function Menu({ isScrolled }: { isScrolled: boolean }) {
  const navigation: any = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
    closeMenu();
  };

  return (
    <>
      <TouchableOpacity onPress={toggleMenu}>
        <Image
          source={isScrolled ? require("../assets/images/icons/menuwhite.png") : require("../assets/images/icons/menu.png")}
          style={styles.burgerIcon}
        />
      </TouchableOpacity>
      <View
        style={[
          styles.burgerMenu,
          { transform: [{ translateX: menuVisible ? 0 : -1000 }] },
        ]}
      >
        <TouchableOpacity onPress={closeMenu}>
          <Image
            source={require("../assets/images/icons/xwhite.png")}
            style={styles.xIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("Home")}>
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("Frameworks")}>
          <Text style={styles.menuText}>Frameworks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("Languages")}>
          <Text style={styles.menuText}>Languages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("Databases")}>
          <Text style={styles.menuText}>Databases</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo("AboutMe")}>
          <Text style={styles.menuText}>About me</Text>
        </TouchableOpacity>
        <Logout/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  burgerMenu: {
    backgroundColor: "black",
    width: '80%',
    padding: 5,
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100,
    transitionDuration: "0.3s",
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  burgerIcon: {
    width: 40,
    height: 40,
    marginLeft: 5,
    marginTop: 5,
    cursor: 'pointer'
  },
  xIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginLeft: 10,
    marginTop: 10
  },
  menuText: {
    fontSize: 30,
    color: "white"
  }
});
