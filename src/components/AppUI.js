import React from "react";
import { TopNav } from "./TopNav";
import { Header } from "./Header";
import { Experience } from "./Experience";
import ".././css/TopNav.css";
import ".././css/Header.css";
import ".././css/Experience.css";

function AppUI() {
  return (
    <>
      <TopNav />
      <Header />
      <Experience />
    </>
  );
}

export { AppUI };
