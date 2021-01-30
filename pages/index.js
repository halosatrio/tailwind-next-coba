import Head from "next/head";

// components
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind Next - Satrio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header isHome />
    </div>
  );
}
