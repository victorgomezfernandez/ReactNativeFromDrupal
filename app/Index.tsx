import AboutMe from "@/screens/AboutMe";
import AddRequest from "@/screens/AddRequest";
import Databases from "@/screens/Databases";
import Frameworks from "@/screens/Frameworks";
import Home from "@/screens/Home";
import Requests from "@/screens/Requests";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Frameworks" component={Frameworks}  options={{ headerShown: false }}/>
      <Stack.Screen name="Databases" component={Databases} options={{ headerShown: false }} />
      <Stack.Screen name="Requests" component={Requests} options={{ headerShown: false }} />
      <Stack.Screen name="AboutMe" component={AboutMe} options={{ headerShown: false }} />
      <Stack.Screen name="AddRequest" component={AddRequest} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}