import { useState } from "react";
import NavBar from "./Navbar";
import Hero_video from "./Hero_video";
import Hero_section from "./Hero_section";
function App() {
  return (
    <>
      <Hero_video />
      <NavBar />
      <div style={{ height: "70vh" }}></div>
      <Hero_section />
    </>
  );
}

export default App;
