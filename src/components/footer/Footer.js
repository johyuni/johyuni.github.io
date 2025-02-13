import React from "react";
import { Link } from "react-router-dom";

// todo :: 전화연결, 메일보내기 해당하는 속성으로 설정할것

function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="footer__link">
          <Link to="" target="" className="link">
            GitHub
          </Link>
          <Link to="" target="" className="link">
            Notion
          </Link>
          <Link to="" target="" className="link">
            Mail
          </Link>
          <Link to="" target="" className="link">
            Phone
          </Link>
          <Link to="" target="" className="link">
            Instagram
          </Link>
        </div>
        <span>&copy;hyyyuni. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
