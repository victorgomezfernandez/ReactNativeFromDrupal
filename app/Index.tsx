import AboutMe from "@/screens/AboutMe";
import AddRequest from "@/screens/AddRequest";
import Databases from "@/screens/Databases";
import Frameworks from "@/screens/Frameworks";
import Home from "@/screens/Home";
import LogInScreen from "@/screens/LogInScreen";
import LogIn from "@/screens/LogInScreen";
import Projects from "@/screens/Projects";
import Requests from "@/screens/Requests";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      navigationBarColor: "#f2f2f2",
      navigationBarTranslucent: true,
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Frameworks" component={Frameworks}/>
      <Stack.Screen name="Databases" component={Databases}/>
      <Stack.Screen name="Requests" component={Requests}/>
      <Stack.Screen name="AboutMe" component={AboutMe}/>
      <Stack.Screen name="AddRequest" component={AddRequest}/>
      <Stack.Screen name="Projects" component={Projects} />
      <Stack.Screen name="LogIn" component={LogInScreen} />
    </Stack.Navigator>
  );
}