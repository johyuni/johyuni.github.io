import React from "react";
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
              같은 목표를 가지면
              <br />더 멀리 갈 수 있습니다.
            </strong>
          </strong>

          <ul className="connect-list">
            <li className="connect-list__item">
              <strong className="connect-list__tit">소통</strong>
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
              <strong className="connect-list__tit">기술</strong>
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
              <strong className="connect-list__tit">상생</strong>
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
      </div>
    </section>
  );
}

export default Connect;
