import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import HomeContents from "../components/HomeContents";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bend the Trend</title>
        <meta name="description" content="Online Store for Clothes" />
      </Head>

      <Image src="/Home.jpg" width={7360} height={4912} alt="Home image" />
      <HomeContents />
    </div>
  );
}
