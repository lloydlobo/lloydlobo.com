import { GetStaticProps, GetStaticPaths } from "next";

import Layout from "@/components/Layout";
import { Fortune } from "@/interfaces";
import React from "react";
import { fortunerData } from "@/utils/fortune";

type Props = {
  item?: Fortune;
  errors?: string;
};

export default function StaticPropsDetail({ item, errors }: Props) {
  if (errors) {
    return (
      <Layout title="Error | lloydlobo.com">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${item ? item.title : "Fortune Detail"} | lloydlobo.com`}>
      {item && <ListDetail item={item} />}
    </Layout>
  );
}

type ListDetailProps = {
  item: Fortune;
};

const ListDetail = ({ item: fortune }: ListDetailProps) => (
  <div>
    <h1>Detail for {fortune.title}</h1>
    <p>ID: {fortune.id}</p>
  </div>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fortunerData.map((fortune) => ({
    params: { id: fortune.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = fortunerData.find((data) => data.id === Number(id));

    return { props: { item } };
  } catch (error: any) {
    return { props: { errors: error.message } };
  }
};
