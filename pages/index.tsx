import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { SectionMd } from "./styled";

export default () => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <SectionMd>
      <p>I'm Dan!</p>
    </SectionMd>
  </Layout>
);
