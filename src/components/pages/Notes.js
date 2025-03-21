import React from "react";
import { Link } from "react-router-dom";

function Notes() {
  // list 배열 생성
  const list = [
    {
      name: "BEM 방법론",
      link: "https://velog.io/@hyyyuni/CSS-BEM-%EB%B0%A9%EB%B2%95%EB%A1%A0",
      dsc: "BEM은 Block, Element, Modifier에서 앞글자를 따와 만들어진 명칭이다. scss와 함께 사용할때 선택자명이 짧아지고 코드의 가독성이 좋아져서 아주 편했다. Element나 Modifier에 따라 클래스명이 길어져 html문서의 가독성이 떨어지고 다소 복잡해 보이는것이 아쉬웠다.",
    },
    {
      name: "SCSS",
      link: "https://velog.io/@hyyyuni/SCSS-SCSSSASS-%EC%84%B8%ED%8C%85",
      dsc: "CSS내 반복되는 내용은 줄이고 보다 효율적으로 스타일 시트를 관리할 수 있다. 작업 시 유지보수에 편리하다.SCSS(SASS)는 '전처리기'라고도 한다. CSS가 만들어지기 전에 이런저런 일들을 먼저 처리해주기 때문이다. ",
    },
    {
      name: "Git",
      link: "https://velog.io/@hyyyuni/git-%EC%83%88-%EB%A0%88%ED%8C%8C%EC%A7%80%ED%86%A0%EB%A6%AC-%ED%91%B8%EC%8B%9C%EB%B0%A9%EB%B2%95",
      dsc: "클론 코딩을 위해 깃허브 개인 계정과 새 레파지토리를 만들고 푸시까지 하는 과정에서 사용법 숙지 부족으로 많은 시간을 썼다. 회사에서 기존에 만들어져 있던 레파지토리를 git clone로 접근했던 간단한 방식과는 다르게 이번에는 새로 만든 내 레파지토리와 깃허브의 연결, 푸시 중 어디서 문제인지 모르는 에러들이 튀어나와 답답하던 찰나 아래 글을 발견하게 되었다. 위 글에서 다룬 git bash here은 처음 써보는 프로그램이었는데, 나중에 또 이런 일이 생기면 참고하고자 이 글을 쓰게 됐다.",
    },
    {
      name: "Clone Coding",
      link: "https://velog.io/@hyyyuni/%EA%B8%B0%EB%A1%9D-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9%EC%9D%84%ED%95%98%EB%A9%B0-%EA%B6%81%EA%B8%88%ED%95%9C%EC%A0%90",
      dsc: "클론 코딩을 처음 접하게 되었다. 클론 코딩은 실제로 서비스가 되고 있는 어떠한 웹사이트를 똑같이 코딩해보면서 어떤 의도로 코드가 짜여있는지 한줄한줄 분석해보고 이해함으로써 할 수 있는 공부 방법이다. 이제 막 시작해보려 하는데 잘할 수 있을까",
    },
    {
      name: "Javascript",
      link: "https://velog.io/@hyyyuni/javascript-%EA%B8%B0%EC%B4%88-%EC%9A%A9%EC%96%B4-%EC%A0%95%EB%A6%AC",
      dsc: "아래는 자바스크립트에서 기본이 되는 항목들이다. consol창을 활용하여 실습해가며 사용법을 익혔다. 공식 문서를 기준으로 학습하는 습관을 들이고, 이해가 되지 않는 내용들은 영상이나 기타 구글 자료를 참조한다.",
    },
  ];

  return (
    <section id="notes" className="main__notes">
      <div className="inner">
        <strong className="main__tit">노트</strong>

        <div className="main__content">
          <div className="box">
            <div className="inputbox">
              <input
                id="input"
                type="text"
                className="input"
                placeholder="hyyyuni.log"
                readOnly
              />
              <i className="ico"></i>
              <i className="ico"></i>
            </div>
            <div className="tagbox">
              <span className="hash">BEM</span>
              <span className="hash">SCSS</span>
              <span className="hash">Git</span>
              <span className="hash">Clone Coding</span>
              <span className="hash">Javascript</span>
            </div>
          </div>

          {/* list */}
          <ul className="list">
            {list.map((item, index) => (
              <li key={item.name} className="list__item">
                <Link to={item.link} target="_blank" className="txt">
                  <span className="txt__body4">({index + 1})</span>
                  <strong className="txt__body1">{item.name}</strong>
                  <span className="txt__body3">{item.dsc}</span>
                  <i className="ico"></i>
                </Link>
              </li>
            ))}
          </ul>

          <Link to="https://velog.io/@hyyyuni/posts" className="txt__link">
            더보기 버튼
          </Link>
          {/* 아래쪽 화살표로 대체할것  */}
        </div>
      </div>
    </section>
  );
}

export default Notes;
