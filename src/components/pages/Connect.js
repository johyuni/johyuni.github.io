import React from "react";

// todo :: 흘러가는 텍스트?
// todo :: text 클래스 정리해보자 txt-tit, txt-hash

function Connect() {
  return (
    <section className="main__connect">
      <div className="inner">
        {/* left*/}
        <div className="content">
          <strong className="content__tit">
            연결
            <strong className="tit">
              배움을 멈출 줄 모르는
              <br />
              전문가가 되겠습니다.
            </strong>
          </strong>

          <ul className="connect-list">
            <li className="connect-list__item">
              <strong className="connect-list__tit">키워드</strong>
              <p className="connect-list__dsc">
                키워드 상세내용입니다. 키워드 상세내용입니다. 키워드
                상세내용입니다. 키워드 상세내용입니다. 키워드 상세내용입니다.
                키워드 상세내용입니다. 키워드 상세내용입니다. 키워드
                상세내용입니다. 키워드 상세내용입니다. 키워드 상세내용입니다.
              </p>
              <span className="connect-list__hash">
                &#35;해시태그 &#35;해시태그 &#35;해시태그
              </span>
            </li>
            <li className="connect-list__item">
              <strong className="connect-list__tit">키워드</strong>
              <p className="connect-list__dsc">
                키워드 상세내용입니다. 키워드 상세내용입니다. 키워드
                상세내용입니다. 키워드 상세내용입니다. 키워드 상세내용입니다.
                키워드 상세내용입니다. 키워드 상세내용입니다. 키워드
                상세내용입니다. 키워드 상세내용입니다. 키워드 상세내용입니다.
              </p>
              <span className="connect-list__hash">
                &#35;해시태그 &#35;해시태그 &#35;해시태그
              </span>
            </li>
            <li className="connect-list__item">
              <strong className="connect-list__tit">키워드</strong>
              <p className="connect-list__dsc">
                키워드 상세내용입니다. 키워드 상세내용입니다. 키워드
                상세내용입니다. 키워드 상세내용입니다. 키워드 상세내용입니다.
                키워드 상세내용입니다. 키워드 상세내용입니다. 키워드
                상세내용입니다. 키워드 상세내용입니다. 키워드 상세내용입니다.
              </p>
              <span className="connect-list__hash">
                &#35;해시태그 &#35;해시태그 &#35;해시태그
              </span>
            </li>
          </ul>
        </div>

        {/* absolute*/}
        <div className="content">
          <strong className="tit">저와 함께해요</strong>
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
