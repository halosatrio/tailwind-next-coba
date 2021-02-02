import Head from "next/head";

// components
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import ProjectShowcase from "../components/ProjectShowcase";
import EmailMe from "../components/EmailMe";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind Next - Satrio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header isHome />
      <About />
      <hr />
      <ProjectShowcase />
      <hr />
      <EmailMe />
      <Footer />
    </div>
  );
}
