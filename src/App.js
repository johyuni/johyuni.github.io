import React from "react";

// component
import Header from "./components/header/Header";

// style
import "./assets/styles/style.scss";

function App() {
  return (
    <div className="wrap">
      <div className="contnet">
        <Header />

        {/* main */}
        <main></main>

        {/* footer */}
      </div>
    </div>
  );
}

export default App;
