import Head from "next/head";
import { AboutPage, Navbar } from "components";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
      </div>
      <div className="w-full h-screen">
        <AboutPage />
      </div>
    </div>
  );
};

export default About;