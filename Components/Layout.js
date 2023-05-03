import Head from "next/head";
import styles from "../styles/Home.module.scss";
export default function Layout({ title, keywords, description, children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div>{children}</div>
    </div>
  );
}
