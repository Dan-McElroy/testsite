import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { HeadingLarge, SectionMd, UnorderedList } from "../styled";
import { getSortedPostsData } from "../lib/posts";

const Home = ({ allPostsData }) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <SectionMd>
      <p>I'm Dan!</p>
    </SectionMd>
    <SectionMd paddingTop={1}>
      <HeadingLarge>Blog</HeadingLarge>
      <UnorderedList>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </UnorderedList>
    </SectionMd>
  </Layout>
);

export default Home;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
