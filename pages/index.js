import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "./styles/utils.module.css";
import React from "react";
import {  loadPosts ,} from "../components/lib/posts";


export async function getStaticProps() {
  const posts = await loadPosts();

  // Props returned will be passed to the page component
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Trees are the green cover of the planet. Trees need water, sunshine
          and air to grow. The process of photosynthesis that occurs in trees,
          that helps them grow, uses oxygen and gives out carbon-dioxide. Thus,
          they contribute to the oxygen in the air that we need to breathe to
          stay alive.
        </p>
      </section>

      {/* static data  get static props */}
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }) => {
            return (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {date}
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
