import React from "react";

// todo :: 흘러가는 텍스트?

function Connect() {
  return (
    <section className="main__connect">
      <div className="inner">
        <div className="content">
          <strong className="content__tit">연결</strong>
          <div className="content__tag">
            <span className="tag tag--s">UX&#47;UI</span>
            <span className="tag tag--s">web publishing</span>
            <span className="tag tag--s">Web design</span>
            <span className="tag tag--s">Positive</span>
          </div>
          <p className="content__dsc">
            하고싶은말 간략하게 두줄정도? 또는 흘러가는 텍스트 애니메이션
            구현해보기
          </p>
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
