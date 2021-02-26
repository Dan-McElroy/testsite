import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { BlogList } from "../components/blog-list";
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
      <BlogList />
    </SectionMd>
  </Layout>
);

export default Home;
