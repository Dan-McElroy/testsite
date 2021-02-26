import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Header,
  HomeLinkContainer,
  CircleImage,
  Heading2X1,
  HeadingLarge,
  AColourInherit,
} from "./styled";

const name = "Dan McElroy";
export const siteTitle = "Dan's Test Site";

const Layout = ({ children, home }) => (
  <Container>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Header>
      {home ? (
        <>
          <CircleImage
            priority
            src="/images/profile.jpg"
            height={144}
            width={144}
            alt={name}
          />
          <Heading2X1>{name}</Heading2X1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <CircleImage
                priority
                src="/images/profile.jpg"
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <HeadingLarge>
            <Link href="/">
              <AColourInherit>{name}</AColourInherit>
            </Link>
          </HeadingLarge>
        </>
      )}
    </Header>
    <main>{children}</main>
    {!home && (
      <HomeLinkContainer>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </HomeLinkContainer>
    )}
  </Container>
);

export default Layout;
