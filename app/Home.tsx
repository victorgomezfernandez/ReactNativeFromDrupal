import Login from "@/components/Login";
import Menu from "@/components/Menu";
import { useNavigation } from "expo-router";
export default function Home() {
  const navigation = useNavigation();
  return (
    <>
      <Menu/>
      <Login />
    </>
  )
}