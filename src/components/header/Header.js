import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      {/* gnb*/}
      <div className="gnb">
        <a href="/" role="button" aria-label="상위로 이동">
          <h1 className="gnb__logo">
            <span className="blind">Portfolio</span>
          </h1>
        </a>

        {/* nav */}
        <nav className="gnb__nav">
          <a href="#profile" role="button" className="link" aria-label="프로필">
            Profile
          </a>
          <a
            href="#project"
            role="button"
            className="link"
            aria-label="프로젝트"
          >
            Project
          </a>
          <a href="#notes" role="button" className="link" aria-label="노트">
            Notes
          </a>
          <a href="#core" role="button" className="link" aria-label="핵심">
            Core
          </a>
          <a href="#connect" role="button" className="link" aria-label="연결">
            Connect
          </a>
        </nav>

        {/* 이 아이는 태블릿에서부터 노출 */}
        <button
          type="button"
          aria-label="메뉴 열기"
          className="gnb__btn"
        ></button>
      </div>

      {/* gnb--mobile*/}
      {/* 태블릿부터 풀메뉴노출 */}
      <div className="gnb gnb--full">
        <div className="gnb--full__header">
          <a href="/" role="button" aria-label="상위로 이동">
            <h1 className="gnb__logo">
              <span className="blind">Portfolio</span>
            </h1>
          </a>
          <button
            type="button"
            aria-label="메뉴 열기"
            className="gnb__btn"
          ></button>
        </div>

        <ul className="gnb--full__menu">
          <li className="gnb--full__depth">
            <a
              href="#profile"
              role="button"
              className="link"
              aria-label="프로필"
            >
              프로필
            </a>
          </li>
          <li className="gnb--full__depth">
            <a
              href="#project"
              role="button"
              className="link"
              aria-label="프로젝트"
            >
              프로젝트
            </a>
          </li>
          <li className="gnb--full__depth">
            <a href="#notes" role="button" className="link" aria-label="노트">
              노트
            </a>
          </li>
          <li className="gnb--full__depth">
            <a href="#core" role="button" className="link" aria-label="핵심">
              핵심역량
            </a>
          </li>
          <li className="gnb--full__depth">
            <a href="#connect" role="button" className="link" aria-label="연결">
              연결
            </a>
          </li>
        </ul>

        <div className="gnb--full__footer">
          <ul className="gnb--full__list">
            <li className="gnb--full__item">
              <Link
                to="https://github.com/johyuni"
                target="_blank"
                className="link"
              >
                GitHub
              </Link>
            </li>
            <li className="gnb--full__item">
              <Link
                to="https://velog.io/@hyyyuni/posts"
                target="_blank"
                className="link"
              >
                Velog
              </Link>
            </li>
            <li className="gnb--full__item">
              <a href="mailto:2252hyun@gmail.com" className="link">
                Mail
              </a>
              {/*  todo :: 메일은 다시 테스트 필요함 */}
            </li>
            <li className="gnb--full__item">
              <Link to="tel:01040682252" className="link">
                Phone
              </Link>
            </li>
            <li className="gnb--full__item">
              <Link
                to="https://www.instagram.com/iiuoahy?igsh=bmt5MTk1eDB0emho&utm_source=qr"
                target="_blank"
                className="link"
              >
                Instagram
              </Link>
            </li>
          </ul>
          <span className="gnb--full__copy">
            &copy;hyyyuni. All rights reserved.
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
