import React from "react";
import { Link } from "react-router-dom";

function Notes() {
  // list 배열 생성
  const list = [
    {
      id: "(1)",
      name: "Design System",
      link: "https://velog.io/@hyyyuni/posts?tag=BEM",
      dsc: "포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 ",
    },
    {
      id: "(2)",
      name: "Clone-Coding",
      link: "https://velog.io/@hyyyuni/posts?tag=localhost",
      dsc: "포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 ",
    },
    {
      id: "(3)",
      name: "Code Editor",
      link: "",
      dsc: "포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 포스트 설명 한줄 말줄임 ",
    },
  ];

  return (
    <section id="notes" className="main__notes">
      <div className="inner">
        <strong className="main__tit">노트</strong>

        <div className="main__content">
          <div className="inputbox">
            <input
              id="input"
              type="text"
              className="input"
              placeholder="hyyyuni.log"
              readOnly
            />
            <i></i>
            <i></i>
          </div>

          <div className="tagbox">
            <span className="hash">Design System</span>
            <span className="hash">Clone-Coding</span>
            <span className="hash">Code Editor</span>
            <span className="hash">Git</span>
            <span className="hash">BEM</span>
            <span className="hash">localhost</span>
          </div>

          {/* list */}
          <ul className="list">
            {list.map((item) => (
              <li key={item.name} className="list__item">
                <Link to={item.link} className="txt">
                  <span className="txt__body4">{item.id}</span>
                  <strong className="txt__body1">{item.name}</strong>
                  <span className="txt__body3">{item.dsc}</span>
                  <i className="ico"></i>
                </Link>
              </li>
            ))}
          </ul>

          <Link to="" className="txt__link">
            더보기 버튼
          </Link>
          {/* 아래쪽 화살표로 대체할것  */}
        </div>
      </div>
    </section>
  );
}

export default Notes;
