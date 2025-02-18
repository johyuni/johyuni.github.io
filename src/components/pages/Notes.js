import React from "react";
import { Link } from "react-router-dom";

function Notes() {
  // list 배열 생성
  // todo :: 자동 넘버링 되도록 구현해볼것
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
    <section className="main__notes">
      <div className="inner">
        {/* top */}
        <div className="content">
          <strong className="content__tit">노트</strong>

          <div className="input-box">
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

          <div className="content__tag">
            <span className="tag">Design System</span>
            <span className="tag">Clone-Coding</span>
            <span className="tag">Code Editor</span>
            <span className="tag">Git</span>
            <span className="tag">BEM</span>
            <span className="tag">localhost</span>
          </div>

          {/* list */}
          <ul className="note-list">
            {list.map((item) => (
              <li key={item.name} className="note-list__item">
                <Link to={item.link} className="note-list__link">
                  <span className="note-list__num">{item.id}</span>
                  <strong className="note-list__tit">{item.name}</strong>
                  <span className="note-list__dsc">{item.dsc}</span>
                  <i className="note-list__ico"></i>
                </Link>
              </li>
            ))}
          </ul>

          <div className="content__link">
            <Link to="" className="link">
              더보기 버튼
            </Link>
            {/* 아래쪽 화살표로 대체할것  */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Notes;
