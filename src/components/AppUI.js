import React from "react";
import { TopNav } from "./TopNav";
import { Header } from "./Header";
import ".././css/TopNav.css";
import ".././css/Header.css";
import { Projects } from "./Projects";

function AppUI() {
  return (
    <>
      <TopNav />
      <Header />
      <Projects />
    </>
  );
}

export { AppUI };
