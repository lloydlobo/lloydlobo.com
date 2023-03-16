import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function MePage() {
  const { data } = useSession();

  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
}
