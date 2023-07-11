import Image from "next/image";
import Link from "next/link";
import utilStyles from "../pages/styles/utils.module.css";
import styles from "./layout.module.css";

const name = "Meditating Tree";
export const siteTitle = "Meditating tree blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div style={{ display: "flex", float: "right", columnGap: "1rem" }}>
          <Link
            href="/page/home"
            style={{ textDecoration: "none", color: "#551A8B" }}
          >
            {" "}
            Home Page{" "}
          </Link>
          <Link
            href="/page/detail"
            style={{ textDecoration: "none", color: "#551A8B" }}
          >
            {" "}
            Details Page{" "}
          </Link>
        </div>
        {home ? (
          <>
            <Image
              priority
              src="/images/tree.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/tree.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
