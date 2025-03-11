import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Frameworks from "./Frameworks";
import Databases from "./Databases";
import { Requests } from "./Requests";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Frameworks" component={Frameworks}  options={{ headerShown: false }}/>
      <Stack.Screen name="Databases" component={Databases} options={{ headerShown: false }} />
      <Stack.Screen name="Requests" component={Requests} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}