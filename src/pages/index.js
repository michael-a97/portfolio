import * as React from "react";
import NavBar from "../components/home/navbar";
import Hero from "../components/home/hero";
import Skills from "../components/skills/skills";
import Experience from "../components/experience/experience";
const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Skills />
      <Experience />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
