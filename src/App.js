import React from "react";
// import { Link } from "react-router-dom";
// Link 태그를 사용하려면 위 소스를 import 해야함

// component
import Header from "./components/header/Header";
import Visual from "./components/pages/Visual";
import Profile from "./components/pages/Profile";
import Project from "./components/pages/Project";
import Notes from "./components/pages/Notes";
import Core from "./components/pages/Core";
import Connect from "./components/pages/Connect";
import Footer from "./components/footer/Footer";

// style
import "./assets/styles/style.scss";

function App() {
  return (
    <div className="wrap">
      {/* skip-nav */}
      <div className="skip">
        <a href="#main" className="skip__link">
          본문 바로가기
        </a>
      </div>

      <Header />
      <main id="main" className="main">
        <Visual />
        <Profile />
        <Project />
        <Notes />
        <Core />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
