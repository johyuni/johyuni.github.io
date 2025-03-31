import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="https://github.com/johyuni"
              target="blank"
              className="link"
            >
              GitHub
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://velog.io/@hyyyuni/posts"
              target="blank"
              className="link"
            >
              Velog
            </a>
          </li>
          <li className="footer__item">
            <a href="mailto:2252hyun@gmail.com" className="link">
              Mail
            </a>
            {/*  todo :: 메일은 다시 테스트 필요함 */}
          </li>
          <li className="footer__item">
            <a href="tel:01040682252" className="link">
              Phone
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://www.instagram.com/iiuoahy?igsh=bmt5MTk1eDB0emho&utm_source=qr"
              target="blank"
              className="link"
            >
              Instagram
            </a>
          </li>
        </ul>
        <span className="footer__copy">
          &copy;hyyyuni. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
