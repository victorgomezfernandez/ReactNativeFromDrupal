import Header from "@/components/Header";
import { getAllRequests } from "@/services/RequestsService";
import { useEffect, useState } from "react";

interface RequestType {
  title: string;
  body: string;
}

export function Requests() {
  const [requests, setRequests] = useState<RequestType[]>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const data: RequestType[] | undefined = await getAllRequests();
      if (data) {
        setRequests(data);
      }
    };
  }, []);

  return (
    <>
      <Header section="REQUESTS" isScrolled={false} />
    </>
  )
}