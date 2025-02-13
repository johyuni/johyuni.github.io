import React from "react";
import { Link } from "react-router-dom";

function Notes() {
  // list 배열 생성
  const list = [
    {
      id: "카테고리",
      name: "포스트 이름1",
      link: "https://velog.io/@hyyyuni/posts?tag=BEM",
    },
    {
      id: "카테고리",
      name: "포스트 이름2",
      link: "https://velog.io/@hyyyuni/posts?tag=localhost",
    },
    { id: "카테고리", name: "포스트 이름3", link: "" },
    { id: "카테고리", name: "포스트 이름4", link: "" },
    { id: "카테고리", name: "포스트 이름5", link: "" },
  ];

  return (
    <section className="main__notes">
      <div className="inner">
        {/* top */}
        <div className="content">
          <strong className="content__tit">hyyyuni.log</strong>

          <div className="input-box">
            <label htmlFor="input">내 노트</label>
            <input id="input" type="text" placeholder="전체" disabled />
            <i></i>
            <i></i>
          </div>
          <span>작성된 글</span>
          <span>5</span>
        </div>

        {/* list */}
        <ul className="note-list">
          {list.map((item) => (
            <li key={item.name} className="note-list__item">
              <Link to={item.link} className="note-list__link">
                <span className="note-list__cate">{item.id}</span>
                <strong className="note-list__tit">{item.name}</strong>
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
