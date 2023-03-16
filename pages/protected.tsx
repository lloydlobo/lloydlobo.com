import AccessDenied from "@/components/AccessDenied";
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function ProtectedPage() {
  const { data: session } = useSession();
  const [content, setContent] = useState();

  // Fetch content from protected route.
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }
  return (
    <Layout>
      <h1>Protected Page</h1>
      <p>
        <strong>{content ?? "/u00a0"}</strong>
      </p>
    </Layout>
  );
}
