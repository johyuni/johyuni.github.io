import React from "react";

// component
import Header from "./components/header/Header";
import Visual from "./components/pages/Visual";
import Profile from "./components/pages/Profile";
import Project from "./components/pages/Project";
import Notes from "./components/pages/Notes";
import Connect from "./components/pages/Connect";

// style
import "./assets/styles/style.scss";
import "swiper/css"; // 여기에 두는게 맞는걸까?
import "swiper/css/effect-fade";
function App() {
  return (
    <div className="wrap">
      <div className="contnet">
        <Header />
        <main className="main">
          <Visual />
          <Profile />
          <Project />
          <Notes />
          <Connect />
        </main>

        {/* footer */}
      </div>
    </div>
  );
}

export default App;
