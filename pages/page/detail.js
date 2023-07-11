import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Lottie from "react-lottie";
import fallentree from "../../public/images/fallen-tree-and-wind.json";
export default function SecondPost() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: fallentree,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Head>
        <title>Details Page</title>
      </Head>
        {/* third party js */}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Lottie options={defaultOptions} height={400} width={400} />
      <section
        style={{
          textAlign: "center",
          marginTop: "-4rem",
          marginLeft: "10rem",
          marginRight: "10rem",
          fontSize: "1.2rem",
          lineHeight: "1.5"
        }}
      >
        <p>
          A commonly applied narrower definition is that a tree has a woody
          trunk formed by secondary growth, meaning that the trunk thickens each
          year by growing outwards, in addition to the primary upwards growth
          from the growing tip.Under such a definition, herbaceous plants
          such as palms, bananas and papayas are not considered trees regardless
          of their height, growth form or stem girth. Certain monocots may be
          considered trees under a slightly looser definition; while the
          Joshua tree, bamboos and palms do not have secondary growth and never
          produce true wood with growth rings,they may produce
          "pseudo-wood" by lignifying cells formed by primary growth. Tree
          species in the genus Dracaena, despite also being monocots, do have
          secondary growth caused by meristem in their trunk, but it is
          different from the thickening meristem found in dicotyledonous
          trees.Aside from structural definitions, trees are commonly
          defined by use for instance, as those plants which yield lumber.
        </p>
      </section>

      <div style={{ textAlign: "center" }}>
        <Link
          href="/page/home"
          style={{
            textDecoration: "none",
            color: "#551A8B",
          }}
        >
          ← Back to home
        </Link>
      </div>
    </>
  );
}
