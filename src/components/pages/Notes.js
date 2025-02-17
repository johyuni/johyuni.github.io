import React from "react";
import { Link } from "react-router-dom";

function Notes() {
  // list 배열 생성
  const list = [
    {
      id: "카테고리",
      name: "포스트 이름1",
      link: "https://velog.io/@hyyyuni/posts?tag=BEM",
      dsc: "포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄",
    },
    {
      id: "카테고리",
      name: "포스트 이름2",
      link: "https://velog.io/@hyyyuni/posts?tag=localhost",
      dsc: "포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄",
    },
    {
      id: "카테고리",
      name: "포스트 이름3",
      link: "",
      dsc: "포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄",
    },
    {
      id: "카테고리",
      name: "포스트 이름4",
      link: "",
      dsc: "포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄",
    },
    {
      id: "카테고리",
      name: "포스트 이름5",
      link: "",
      dsc: "포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄",
    },
    {
      id: "카테고리",
      name: "포스트 이름6",
      link: "",
      dsc: "포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄 포스트 설명 두 줄",
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

          <div className="note__tag">
            <span className="tag">Design System</span>
            <span className="tag">Clone-Coding</span>
            <span className="tag">Code Editor</span>
            <span className="tag">Git</span>
            <span className="tag">BEM</span>
            <span className="tag">localhost</span>
          </div>
        </div>

        {/* list */}
        <ul className="note-list">
          {list.map((item) => (
            <li key={item.name} className="note-list__item">
              <Link to={item.link} className="note-list__link">
                <span className="note-list__cate">{item.id}</span>
                <strong className="note-list__tit">{item.name}</strong>
                <span className="note-list__dsc">{item.dsc}</span>
                <i className="note-list__ico"></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Notes;
