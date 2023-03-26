import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Features from "@/components/Features";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Cover from "@/components/Cover";
import Rail from "@/components/Rail";
import Tokenomics from "@/components/Tokenomics";
import Why from "@/components/Why";
import Team from "@/components/Team";
import WhitePaper from "@/components/WhitePaper";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Roadmap from "@/components/Roadmap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Token Rocket - Presale Sample</title>
      </Head>

      {/* Navbar Section */}
      <Navbar />

      {/* cover section */}
      <Cover />

      {/* features Section */}
      <Features styles={styles} />

      {/* about section */}
      <About styles={styles} />

      {/* rail section */}
      <Rail styles={styles} />

      {/* tokenomics section */}
      <Tokenomics styles={styles} />

      {/* roadmap section */}
      <Roadmap styles={styles} />
      {/* why section */}
      <Why styles={styles} />

      {/* team section */}
      <Team styles={styles} />

      {/* whitepaper section */}
      <WhitePaper styles={styles} />

      {/* contact section */}
      <Contact styles={styles} />

      {/* footer section */}
      <Footer styles={styles} />
    </>
  );
}
