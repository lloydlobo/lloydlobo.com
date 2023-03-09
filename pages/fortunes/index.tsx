import { GetStaticProps } from "next";
import Link from "next/link";

import { fortunerData } from "@/utils/fortune";
import { Fortune } from "@/interfaces";
import Layout from "@/components/Layout";

type Props = {
  items: Fortune[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Fortune list</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /fortunes</p>
    <List items={items} />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

type PropsList = {
  items: Fortune[];
};

const List = ({ items }: PropsList) => (
  <ul>
    {items.map((item, index) => (
      <li key={`list-${index}`}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

type PropsListItem = {
  data: Fortune;
};

const ListItem = ({ data }: PropsListItem) => (
  <Link href="/fortunes/[id]" as={`/fortunes/${data.id}`}>
    {data.id}:{data.title}
  </Link>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Fortune[] = fortunerData;
  return { props: { items } };
};

export default WithStaticProps;
