import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <ul className="footer__list">
          <li className="footer__item">
            <Link
              to="https://github.com/johyuni"
              target="_blank"
              className="link"
            >
              GitHub
            </Link>
          </li>
          <li className="footer__item">
            <Link
              to="https://velog.io/@hyyyuni/posts"
              target="_blank"
              className="link"
            >
              Velog
            </Link>
          </li>
          <li className="footer__item">
            <a href="mailto:2252hyun@gmail.com" className="link">
              Mail
            </a>
            {/*  todo :: 메일은 다시 테스트 필요함 */}
          </li>
          <li className="footer__item">
            <Link to="tel:01040682252" className="link">
              Phone
            </Link>
          </li>
          <li className="footer__item">
            <Link
              to="https://www.instagram.com/iiuoahy?igsh=bmt5MTk1eDB0emho&utm_source=qr"
              target="_blank"
              className="link"
            >
              Instagram
            </Link>
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
