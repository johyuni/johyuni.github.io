import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // 모바일 메뉴 데이터
  const menu = [
    { id: "profile", name: "프로필" },
    { id: "project", name: "프로젝트" },
    { id: "notes", name: "노트" },
    { id: "core", name: "핵심역량" },
    { id: "connect", name: "연결" },
  ];

  // 모바일 푸터메뉴 데이터
  // 메일/전화연결 메뉴 추가해보기 (작동안함)
  const menuFooter = [
    { id: "GitHub", name: "GitHub", link: "https://github.com/johyuni" },
    { id: "Velog", name: "Velog", link: "https://velog.io/@hyyyuni/posts" },
    {
      id: "Instagram",
      name: "Instagram",
      link: "https://www.instagram.com/iiuoahy?igsh=bmt5MTk1eDB0emho&utm_source=qr",
    },
  ];

  return (
    <header className="header">
      {/* gnb*/}
      <div className="inner">
        <div className="gnb">
          <a href="/" role="button" aria-label="상위로 이동">
            <h1 className="gnb__logo">
              <span className="blind">Portfolio</span>
            </h1>
          </a>

          {/* nav */}
          {/* Link태그여야 하지만 앵커포인트 설정을 위해 a태그로 작업 */}
          <nav className="gnb__nav">
            {["profile", "project", "notes", "core", "connect"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="link"
                aria-label={item}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="메뉴 열기"
            className="gnb__btn"
            onClick={toggleMenu}
          ></button>
        </div>

        {/* gnb--mobile*/}
        <div className={`gnb gnb--full ${isMenuOpen ? "show" : ""}`}>
          <div className="gnb--full__header">
            <a href="/" role="button" aria-label="상위로 이동">
              <h1 className="gnb__logo">
                <span className="blind">Portfolio</span>
              </h1>
            </a>
            <button
              type="button"
              aria-label="메뉴 닫기"
              className="gnb__btn"
              onClick={closeMenu}
            ></button>
          </div>

          <ul className="gnb--full__menu">
            {menu.map((item) => (
              <li key={item.id} className="gnb--full__depth">
                <a href={`#${item.id}`} className="link" onClick={closeMenu}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="gnb--full__footer">
            <ul className="gnb--full__list">
              {menuFooter.map((item) => (
                <li key={item.id} className="gnb--full__item">
                  <a href={item.link} target="blank" className="link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <span className="gnb--full__copy">
              &copy;hyyyuni. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
