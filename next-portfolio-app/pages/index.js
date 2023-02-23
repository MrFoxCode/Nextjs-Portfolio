import React from "react";
import Head from "next/head";
import config from "./config.json";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";




function indexPage(){

  return(
    <div>
      <Head>
        <title>Welcome!</title>
        <link rel="icon" type="image/x-icon" href={config.headLogo}></link>
      </Head>

      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />




    </div>
  )

}

export default indexPage;