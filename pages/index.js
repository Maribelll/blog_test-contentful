import Head from "next/head";

import style from "/styles/blogpage.module.scss";

import Layout from "../Components/Layout";
import PostCard from "../Components/PostCard";
import {createClient} from "contentful";
export const getStaticProps  =async () => {
  const client = createClient({
  space :process.env.CONTENTFUL_SPACE_ID || "",
  accessToken : process.env.CONTENTFUL_ACCESS_KEY || ""

})

  const res = await client.getEntries({ content_type: "blogPage" });
  console.log('res',res)
  return {
    props: {
      posts: res.items,
    },
  };
}

export default function Blog({ posts }) {
  console.log(posts);
  return (
    <Layout title="Blog" keywords="posts blog" description="Latest stories">
      <Head />

      <div className={style.sectionblog}>
        <div className={style.containerblog}>
          <h2>Latest stories, insights and ideas</h2>

          <div className={style.posts}>
            {posts.map((blogPage) => (
              <PostCard blogPage={blogPage} key={blogPage.sys.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
