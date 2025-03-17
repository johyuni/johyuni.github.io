import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <ul className="footer__list">
          <li className="footer__item">
            <Link to="" target="" className="link">
              GitHub
            </Link>
          </li>
          <li className="footer__item">
            <Link to="" target="" className="link">
              Notion
            </Link>
          </li>
          <li className="footer__item">
            <Link to="" target="" className="link">
              Mail
            </Link>
          </li>
          <li className="footer__item">
            <Link to="" target="" className="link">
              Phone
            </Link>
          </li>
          <li className="footer__item">
            <Link to="" target="" className="link">
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
