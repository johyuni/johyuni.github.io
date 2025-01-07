// todo :: skip nav를 만들어야할까?
// todo :: nav를 ui>li>a 구조  아님 nav>a 구조?
// todo :: 메뉴를 클릭할때 해당섹션으로 부드럽게 포커스되어야함
// todo :: 이 컴포넌트를 app.js에 연결해서 메인페이지에 보이도록 하기

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" aria-label="상위로 이동">
        <h1 className="header__logo">
          <span className="blind">Portfolio</span>
        </h1>
      </Link>

      <nav className="header__nav">
        <Link to="/" className="header__link" aria-label="프로필">
          Profile
        </Link>
        <Link to="/" className="header__link" aria-label="프로젝트">
          Project
        </Link>
        <Link to="/" className="header__link" aria-label="노트">
          Notes
        </Link>
        <Link to="/" className="header__link" aria-label="연결">
          Connect
        </Link>
      </nav>
    </header>
  );
}

export default Header;
