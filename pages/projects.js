import Head from "next/head";

// components
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import EmailMe from "../components/EmailMe";
import Footer from "../components/Footer";
import ThumbsProject from "../components/ThumbsProject";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind Next - Satrio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header isProject />
      <div className="mt-12 mx-auto mb-0 py-0 px-5 max-w-3xl grid grid-cols-1 gap-12">
        <ThumbsProject post="1" />
        <ThumbsProject post="2" />
        <ThumbsProject post="3" />
        <ThumbsProject post="4" />
        <ThumbsProject post="5" />
      </div>
      <hr />
      <EmailMe />
      <Footer />
    </div>
  );
}
