import React from "react";

function Header() {
  return (
    <header className="header">
      <a href="/" role="button" aria-label="상위로 이동">
        <h1 className="header__logo">
          <span className="blind">Portfolio</span>
        </h1>
      </a>

      {/* nav */}
      <nav className="header__nav">
        <a
          href="#profile"
          role="button"
          className="header__link"
          aria-label="프로필"
        >
          Profile
        </a>
        <a
          href="#project"
          role="button"
          className="header__link"
          aria-label="프로젝트"
        >
          Project
        </a>
        <a
          href="#notes"
          role="button"
          className="header__link"
          aria-label="노트"
        >
          Notes
        </a>
        <a
          href="#core"
          role="button"
          className="header__link"
          aria-label="핵심"
        >
          Core
        </a>
        <a
          href="#connect"
          role="button"
          className="header__link"
          aria-label="연결"
        >
          Connect
        </a>
      </nav>
    </header>
  );
}

export default Header;
