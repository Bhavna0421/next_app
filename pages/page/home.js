import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Lottie from "react-lottie";
import tree from "../../public/images/tree-plantation.json";
export default function FirstPost() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: tree,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Head>
        <title>Home Page</title>
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
          Trees are not a monophyletic taxonomic group but consist of a wide
          variety of plant species that have independently evolved a trunk and
          branches as a way to tower above other plants to compete for sunlight.
          The majority of tree species are angiosperms or hardwoods; of the
          rest, many are gymnosperms or softwoods. Trees tend to be long-lived,
          some reaching several thousand years old. Trees have been in existence
          for 370 million years. It is estimated that there are around three
          trillion mature trees in the world. A tree typically has many
          secondary branches supported clear of the ground by the trunk. This
          trunk typically contains woody tissue for strength, and vascular
          tissue to carry materials from one part of the tree to another. For
          most trees it is surrounded by a layer of bark which serves as a
          protective barrier. Below the ground, the roots branch and spread out
          widely; they serve to anchor the tree and extract moisture and
          nutrients from the soil. Above ground, the branches divide into
          smaller branches and shoots. The shoots typically bear leaves, which
          capture light energy and convert it into sugars by photosynthesis,
          providing the food for the tree's growth and development.
        </p>
      </section>

      <div style={{ textAlign: "center" }}>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#551A8B",
            // backgroundColor: "#551A8B",
            // borderRadius: "3px",
          }}
        >
          ← Back to main
        </Link>
      </div>
    </>
  );
}
