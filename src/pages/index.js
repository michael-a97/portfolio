import * as React from "react";
import NavBar from "../components/home/navbar";
import Hero from "../components/home/hero";
import Skills from "../components/home/skills";
const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Skills />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
