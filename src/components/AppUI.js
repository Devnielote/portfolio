import React from "react";
import { TopNav } from "./TopNav";
import { Header } from "./Header";
import { Contact } from "./Contact";
import ".././css/TopNav.css";
import ".././css/Header.css";
import "../css/Contact.css";

function AppUI() {
  return (
    <>
      <TopNav />
      <Header />
      <Contact />
    </>
  );
}

export { AppUI };
