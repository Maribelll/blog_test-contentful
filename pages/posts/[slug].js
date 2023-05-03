import { createClient } from "contentful";

import Head from "next/head";

import style from "../../styles/post.module.scss";

import Layout from "../../Components/Layout";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY

})
export const getStaticPaths = async () => {

    const res = await client.getEntries({
        content_type: "blogPage",
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug}
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps  =async ({params}) => {


      const { items } = await client.getEntries({
        content_type: "blogPage",
        'fields.slug': params.slug
    })

   if(!items.length){
        return{
            redirect:{
                destination : "/",
                permanent : false
            }
        }
    }

  return {
    props: {
      blogPage: items[0]
    },
  };
}

export default function PostDetails({ blogPage }) {
  const { mainImage, title, authorImage, authorName, data, post } =
    blogPage?.fields || {};

  if (!blogPage) return <div>Loading...</div>

  return (

    <Layout title="blog" keywords="posts" description="Our blog">
      <Head />

      <div className={style.postsall}>
        <div className={style.postscontainer}>
          <div className={style.headerauthor}>
            <h1 style={{ textAlign: "left" }}>{title}</h1>

            <div>
              <div className="banner">
                <img
                  alt=""
                  src={"https:" + mainImage?.fields?.file?.url}
                  width={mainImage?.fields?.file?.details?.image?.width}
                  height={mainImage?.fields?.file?.details?.image?.height}
                ></img>

                <div className={style.photo}>
                  <div className={style.photoImage}>
                    <img
                      alt=""
                      src={"https:" + authorImage?.fields?.file?.url}
                      width={authorImage?.fields?.file.details.image.width}
                      height={authorImage?.fields?.file.details.image.height}
                    ></img>
                    <div className={style.photoname}>
                      <p>
                        {authorName}
                        <span style={{ fontWeight: "600" }}>
                          <br />
                        </span>
                        {data}
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  alt=""
                  src={"https:" + mainImage?.fields?.file?.url}
                  width={mainImage?.fields?.file?.details?.image?.width}
                  height={mainImage?.fields?.file?.details?.image?.height}
                ></img>
                <p className={style.text}>{documentToReactComponents(post)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.blog}>
          {/*<Blogpost />*/}
        </div>
      </div>
    </Layout>
  );
}

