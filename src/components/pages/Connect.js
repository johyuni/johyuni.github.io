import React from "react";

// todo :: 흘러가는 텍스트?

function Connect() {
  return (
    <section className="main__connect">
      <div className="inner">
        {/* left*/}
        <div className="content">
          <strong className="content__tit">연결</strong>
          <strong className="">패기있는 문구</strong>
          <ul>
            <li>
              <strong>키워드</strong>
              <p>내용5줄 내용5줄 내용5줄 내용5줄 내용5줄 내용5줄</p>
              <span>키워드</span>
            </li>
            <li>
              <strong>키워드</strong>
              <p>내용5줄 내용5줄 내용5줄 내용5줄 내용5줄 내용5줄</p>
              <span>키워드</span>
            </li>
            <li>
              <strong>키워드</strong>
              <p>내용5줄 내용5줄 내용5줄 내용5줄 내용5줄 내용5줄</p>
              <span>키워드</span>
            </li>
          </ul>
        </div>

        {/* right*/}
        <div className="content">
          <strong>바로 연결</strong>
          <div className="content__img">
            <img src="" alt="" className="img" />
          </div>
        </div>

        {/* 핵심역량 세가지에 녹이기 */}
        {/* <div className="content__item">
          <strong className="content__subtit">Character</strong>
          <span>끈기있는</span>
          <span>도전적인</span>
          <span>섬세한</span>
        </div> */}
        {/* <div className="content__item">
          <strong className="content__subtit">Interest in</strong>
          <span>퍼블리싱</span>
          <span>프론트엔드 개발</span>
          <span>UXUI 디자인</span>
          <span>브랜딩 디자인</span>
        </div> */}
      </div>
    </section>
  );
}

export default Connect;
