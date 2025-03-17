import Header from "@/components/Header";
import Request from "@/components/Request";
import { useUser } from "@/hooks/useUser";
import { getAllRequests } from "@/services/RequestsService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

interface RequestType {
  field_title: string;
  field_body: string;
  field_requested_by: string;
  uuid: string;
}

export default function Requests() {
  const navigation: any = useNavigation();
  const [requests, setRequests] = useState<RequestType[]>([]);
  const { userName } = useUser();

  useEffect(() => {
    const fetchRequests = async () => {
      const data: RequestType[] | undefined = await getAllRequests();
      if (data) {
        setRequests(data);
      }
    };

    fetchRequests();
  }, []);

  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <>
      <Header section="REQUESTS" isScrolled={false} />
      <ScrollView contentContainerStyle={styles.container} scrollEventThrottle={16}>
        <Text style={styles.title}>Requests sent by users</Text>
        <View style={styles.requestsList}>
          {requests.length > 0 ? (
            requests.map((r) => (
              <Request key={r.field_title} title={r.field_title} body={r.field_body} requestedBy={r.field_requested_by} id={r.uuid}/>
            ))
          ) : (
            <Text style={styles.loadingText}>Loading requests...</Text>
          )}
        </View>

        {userName && (
          <TouchableOpacity onPress={() => navigateTo("AddRequest")}>
            <Text style={styles.addRequestButton}>ADD A REQUEST</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fcba03",
  },
  requestsList: {
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
    color: "#aaa",
    marginTop: 20,
  },
  addRequestButton: {
    backgroundColor: "#fcba03",
    textAlign: "center",
    fontSize: 20,
    padding: 5,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "black",
    alignSelf: "center",
    width: "55%",
    marginTop: 30,
    fontWeight: "bold",
  },
});
